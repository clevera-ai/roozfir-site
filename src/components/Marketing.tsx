import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import changelogSource from '../../CHANGELOG.md?raw'

const APP = 'https://app.roozfir.online/'
const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(' ')

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-lg font-bold">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white" aria-hidden>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18V7l7 5 7-5v11" /></svg>
      </span>
      Roozfir
    </Link>
  )
}

export function MarketingLayout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
    else document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pathname, hash])
  const link = ({ isActive }: { isActive: boolean }) => cx('text-sm font-medium hover:text-ink', isActive ? 'text-ink' : 'text-muted')
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <header className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Logo />
          <nav aria-label="Site" className="flex items-center gap-4 sm:gap-6">
            <Link to={{ pathname: '/', hash: '#features' }} className="hidden text-sm font-medium text-muted hover:text-ink sm:inline">Features</Link>
            <NavLink to="/pricing" className={link}>Pricing</NavLink>
            <NavLink to="/changelog" className={link}>Changelog</NavLink>
            <a href={APP} className="text-sm font-medium text-muted hover:text-ink">Log in</a>
            <a href={APP} className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover">Start free</a>
          </nav>
        </div>
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-4">
          <div className="sm:col-span-2"><Logo /><p className="mt-3 max-w-xs text-muted">Time tracking and invoicing for small agencies.</p></div>
          <nav aria-label="Product" className="space-y-2"><p className="font-semibold">Product</p>
            <Link className="block text-muted hover:text-ink" to={{ pathname: '/', hash: '#features' }}>Features</Link>
            <Link className="block text-muted hover:text-ink" to="/pricing">Pricing</Link>
            <Link className="block text-muted hover:text-ink" to="/changelog">Changelog</Link></nav>
          <nav aria-label="Account" className="space-y-2"><p className="font-semibold">Account</p>
            <a className="block text-muted hover:text-ink" href={APP}>Log in</a>
            <a className="block text-muted hover:text-ink" href={APP}>Start free</a></nav>
        </div>
        <p className="border-t border-line px-4 py-4 text-center text-xs text-muted">Roozfir is a fictional demo product made for testing.</p>
      </footer>
    </div>
  )
}

const FEATURES = [
  ['Timer and timesheets', 'Start a timer in one click, fix entries later, and fill in your week on a timesheet grid.'],
  ['Invoices from tracked time', 'Pull unbilled hours into an invoice, add line items and tax, preview, and send.'],
  ['Recurring invoices', 'Schedule retainers weekly or monthly and see the next three invoices before you save.'],
  ['Project stage board', 'Drag projects from planned to done, or move them with the keyboard.'],
  ['Automation rules', 'When a project goes over budget, if the client is on retainer, then email the project manager.'],
  ['Team and permissions', 'Invite teammates and decide per role who can edit time, send invoices or manage billing.'],
]
const STEPS = [
  ['Track', 'Your team starts a timer or fills in a timesheet. Every hour lands on a project and a client.'],
  ['Review', 'See hours, budgets and unbilled time in one place before the month ends.'],
  ['Bill', 'Turn unbilled time into an invoice, preview it and send it in a minute.'],
]
const QUOTES = [
  ['We stopped chasing timesheets on Fridays. Everyone fills them in as they go.', 'Studio owner, 6-person design agency'],
  ['Invoices used to take half a day each month. Now it is a few clicks.', 'Operations lead, 12-person marketing agency'],
  ['The budget alerts caught two projects before they ran over.', 'Project manager, small web studio'],
]

export function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 text-center sm:pt-24">
        <p className="mb-4 inline-block rounded-full bg-soft px-3 py-1 text-xs font-semibold text-brand">Time tracking and invoicing for small agencies</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Track every hour. Bill every client.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">Roozfir turns the time your team tracks into invoices your clients pay, without the spreadsheet in the middle.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={APP} className="rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-hover">Start free</a>
          <Link to="/pricing" className="rounded-lg border border-line bg-surface px-6 py-3 font-semibold hover:bg-soft">See pricing</Link>
        </div>
        <p className="mt-3 text-sm text-muted">No card needed. Set up in about five minutes.</p>
        <div aria-hidden className="mx-auto mt-12 grid max-w-4xl gap-3 rounded-2xl border border-line bg-surface p-4 text-left shadow-xl sm:grid-cols-3">
          {[['Hours this week', '22h'], ['Unbilled time', '$2,068'], ['Outstanding invoices', '$1,231']].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-line p-4"><p className="text-xs text-muted">{k}</p><p className="mt-1 text-2xl font-semibold">{v}</p></div>))}
          <div className="rounded-xl bg-soft p-4 text-sm sm:col-span-3"><p className="font-medium">Website redesign</p><div className="mt-2 h-2 rounded-full bg-line"><div className="h-2 w-2/3 rounded-full bg-brand" /></div><p className="mt-1 text-xs text-muted">66% of budget used</p></div>
        </div>
      </section>
      <section aria-label="Who uses Roozfir" className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="text-sm text-muted">Built for design studios, web agencies, marketing teams and consultancies with 2 to 25 people.</p>
      </section>
      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Everything a small agency needs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-line bg-surface p-6"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-muted">{body}</p></div>))}
        </div>
      </section>
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3">
          {STEPS.map(([t, b], i) => (
            <div key={t}><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-white">{i + 1}</span><h3 className="mt-3 text-lg font-semibold">{t}</h3><p className="mt-1 text-sm text-muted">{b}</p></div>))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">What teams say</h2>
        <p className="mb-8 text-center text-xs text-muted">Illustrative quotes for a demo product.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {QUOTES.map(([q, who]) => (
            <figure key={q} className="rounded-2xl border border-line bg-surface p-6"><blockquote className="text-sm">&ldquo;{q}&rdquo;</blockquote><figcaption className="mt-3 text-xs text-muted">{who}</figcaption></figure>))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-ink px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">Ready to bill every hour?</h2>
          <p className="mx-auto mt-2 max-w-md text-white/70">Plans start at $12 a month. Change or cancel any time.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={APP} className="rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-hover">Start free</a>
            <Link to="/pricing" className="rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}

const PLANS = [
  { name: 'Solo', price: 12, seats: '1 seat', blurb: 'For freelancers.', features: ['Unlimited clients', 'Timer and timesheets', '5 invoices a month'] },
  { name: 'Studio', price: 29, seats: 'Up to 5 seats', blurb: 'For small studios.', features: ['Everything in Solo', 'Unlimited invoices', 'Recurring invoices', 'Automations'] },
  { name: 'Agency', price: 79, seats: 'Up to 25 seats', blurb: 'For growing agencies.', features: ['Everything in Studio', 'Permissions matrix', 'Priority support'] },
]
const FAQ = [
  ['Do I need a card to start?', 'No. Start free, look around with sample data, and pick a plan when you are ready.'],
  ['Can I change plans later?', 'Yes. Open Billing in the app and choose Change plan. The new plan starts at your next renewal.'],
  ['Can my whole team use it?', 'Studio covers up to 5 seats and Agency up to 25. Each person tracks their own time.'],
]

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold tracking-tight">Simple pricing</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted">Pick the plan that fits your team. Change it any time from Billing in the app.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={cx('flex flex-col rounded-2xl border bg-surface p-6', p.name === 'Studio' ? 'border-brand shadow-lg' : 'border-line')}>
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-muted">{p.blurb}</p>
            <p className="my-4"><span className="text-4xl font-bold">${p.price}</span><span className="text-muted"> / month</span></p>
            <p className="mb-3 text-sm font-medium">{p.seats}</p>
            <ul className="mb-6 flex-1 space-y-2 text-sm text-muted">{p.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
            <a href={APP} className="rounded-lg bg-brand px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-hover">Start free with {p.name}</a>
          </div>))}
      </div>
      <h2 className="mb-4 mt-16 text-center text-2xl font-bold">Questions</h2>
      <dl className="mx-auto max-w-2xl space-y-4">{FAQ.map(([q, a]) => <div key={q} className="rounded-xl border border-line bg-surface p-4"><dt className="font-semibold">{q}</dt><dd className="mt-1 text-sm text-muted">{a}</dd></div>)}</dl>
    </section>
  )
}

interface Entry { heading: string; date: string; title: string; bullets: string[] }
export function parseChangelog(src: string): Entry[] {
  return src.split(/\n(?=## )/).filter((b) => b.startsWith('## ')).map((block) => {
    const [head, ...rest] = block.split('\n')
    const [heading, date = ''] = head.replace(/^## /, '').split(' - ')
    const lines = rest.map((l) => l.trim()).filter(Boolean)
    return { heading, date, title: lines.find((l) => !l.startsWith('- ')) ?? '', bullets: lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2)) }
  })
}

export function Changelog() {
  const entries = parseChangelog(changelogSource)
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
      <p className="mt-3 text-muted">What is new in Roozfir, newest first.</p>
      <div className="mt-10 space-y-10">
        {entries.map((e) => (
          <article key={e.heading + e.date + e.title} className="border-l-2 border-brand pl-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-xl font-semibold">{e.title || e.heading}</h2>
              <span className="rounded-full bg-soft px-2 py-0.5 text-xs font-semibold text-brand">{e.heading}</span>
              <time className="text-sm text-muted">{e.date}</time>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </article>))}
      </div>
    </section>
  )
}
