// Builds assets/terminal.svg from public GitHub activity. Runs daily in Actions.
// Node 20+, no dependencies. Private work shows only as a contribution count; private repo names never appear.
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const USER = process.env.GH_USER || 'Praveenkumarbyrapuneni';
const OUT = process.env.OUT || 'assets/terminal.svg';
const API = 'https://api.github.com';
const MAX_REPOS = 3;
const WINDOW_DAYS = 30;
const DAY_MS = 86_400_000;

const C = { ink: '#101826', bar: '#18233A', amber: '#F2B64C', teal: '#5FD3BC', text: '#DCE3F0', dim: '#8A97B0' };

export const escapeXml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

export const clip = (s, n) => {
  const one = String(s).split('\n')[0].trim();
  return one.length > n ? one.slice(0, n - 1) + '…' : one;
};

export const ago = (iso, now = Date.now()) => {
  const d = Math.floor((now - Date.parse(iso)) / DAY_MS);
  return d <= 0 ? 'today' : d === 1 ? '1 day ago' : `${d} days ago`;
};

const QUERY = `query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, first: ${MAX_REPOS + 1},
                 orderBy: {field: PUSHED_AT, direction: DESC}) {
      totalCount nodes { name description pushedAt }
    }
    contributionsCollection(from: $from, to: $to) {
      restrictedContributionsCount
      contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } }
    }
  }
}`;

async function collect(now = new Date()) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is required (GraphQL API)');
  const from = new Date(now.getTime() - WINDOW_DAYS * DAY_MS).toISOString();
  const res = await fetch(`${API}/graphql`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'profile-terminal', 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: QUERY, variables: { login: USER, from, to: now.toISOString() } }),
  });
  const body = await res.json();
  if (!res.ok || body.errors) throw new Error(`GraphQL ${res.status}: ${JSON.stringify(body.errors ?? body)}`);
  const { repositories: r, contributionsCollection: c } = body.data.user;
  const days = c.contributionCalendar.weeks.flatMap((w) => w.contributionDays).slice(-WINDOW_DAYS);
  // The profile README repo is always the most recent push; it says nothing about real work.
  const repos = r.nodes.filter((n) => n.name.toLowerCase() !== USER.toLowerCase()).slice(0, MAX_REPOS);
  return { repoCount: r.totalCount, repos, total: c.contributionCalendar.totalContributions,
    privateCount: c.restrictedContributionsCount, days };
}

export function render({ repoCount, repos, total, privateCount = 0, days }, now = new Date()) {
  const lines = [];
  let y = 92;
  const row = (parts, gap = 26) => { lines.push(`<text y="${y}">${parts}</text>`); y += gap; };
  const t = (x, s, fill = C.text) => `<tspan x="${x}" fill="${fill}">${escapeXml(s)}</tspan>`;

  row(t(32, '>', C.amber) + t(52, 'what have you been building?'), 34);
  row(t(32, '●', C.teal) + t(52, 'Read') + t(96, `github.com/${USER}`, C.dim), 34);

  const priv = privateCount === 0 ? '' : privateCount === total ? ', all in private repos' : `, ${privateCount} of them in private repos`;
  row(t(52, `${total} contributions in the last ${WINDOW_DAYS} days${priv}`), 18);
  const max = Math.max(1, ...days.map((d) => d.contributionCount));
  const BAR_W = 18, GAP = 6, CHART_H = 56;
  const bars = days.map((d, i) => {
    const h = d.contributionCount === 0 ? 2 : Math.max(4, Math.round((d.contributionCount / max) * CHART_H));
    const fill = d.contributionCount === 0 ? C.bar : C.teal;
    return `<rect x="${52 + i * (BAR_W + GAP)}" y="${y + CHART_H - h}" width="${BAR_W}" height="${h}" rx="3" fill="${fill}"><title>${escapeXml(d.date)}: ${d.contributionCount}</title></rect>`;
  });
  lines.push(...bars);
  y += CHART_H + 34;

  row(t(52, `public repos (${repoCount}), most recently pushed`, C.dim));
  for (const r of repos) {
    row(t(52, clip(r.name, 22), C.amber) + t(260, clip(r.description || 'no description', 46)) + t(760, ago(r.pushedAt, now.getTime()), C.dim));
  }
  y += 8;
  row(t(32, '>', C.amber) + `<tspan class="cur" fill="${C.text}">▍</tspan>`);

  const h = y + 30;
  const stamp = now.toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${h}" width="900" height="${h}" role="img" aria-label="Terminal showing ${total} GitHub contributions in the last ${WINDOW_DAYS} days and recent public repos, updated ${stamp}">
<style>
  text{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:15px}
  .cur{animation:b 1.1s steps(1) infinite}@keyframes b{50%{opacity:0}}
  @media (prefers-reduced-motion: reduce){.cur{animation:none}}
</style>
<rect width="900" height="${h}" rx="14" fill="${C.ink}"/>
<path d="M0 14a14 14 0 0 1 14-14h872a14 14 0 0 1 14 14v30H0z" fill="${C.bar}"/>
<circle cx="24" cy="22" r="6" fill="#FF5F57"/><circle cx="44" cy="22" r="6" fill="#FEBC2E"/><circle cx="64" cy="22" r="6" fill="#28C840"/>
<text x="450" y="27" text-anchor="middle" fill="${C.dim}" style="font-size:13px">claude code  ~/praveen</text>
<text x="868" y="27" text-anchor="end" fill="${C.dim}" style="font-size:12px">updated ${stamp}</text>
${lines.join('\n')}
</svg>
`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    writeFileSync(OUT, render(await collect()));
    console.log(`wrote ${OUT}`);
  } catch (err) {
    console.error(`terminal.svg not updated for ${USER}: ${err.message}`);
    process.exit(1);
  }
}
