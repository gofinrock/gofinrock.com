# Finrock — app UI punch list

Written while matching gofinrock.com's marketing mockups to the real app screens
(`bookkeeper-ai/frontend/src`). Each item is a change **in the app**, phrased so it can
be handed straight to a coding agent. Nothing here is a site change — the site has
already been corrected to match the app.

Read order: 1–4 are worth doing, 5–8 are judgement calls.

---

## 1. Login screen — align to the site's graphite treatment

`pages/Login.tsx`

The left panel is navy; every dark surface on the site is now graphite. A user who
clicks "Sign in" on gofinrock.com lands on a different-looking brand.

- Left panel background → `radial-gradient(130% 100% at 72% -12%, #1b1b2c 0%, #121219 42%, #0b0b10 74%, #070709 100%)`
- Feature icon chips → `rgba(255,255,255,.06)` fill, `rgba(255,255,255,.14)` border
- **Sign in button** → `linear-gradient(120deg,#f6921a,#fb923c)`, text `#140d02`,
  shadow `0 14px 40px rgba(246,146,26,.38)`. The navy button currently sits on a navy
  panel and reads as disabled; orange is the primary CTA everywhere on the site.
- Right panel stays `#f6f5f1`, card stays white — no change.

## 2. "Unsorted £755 · 49%" is the loudest number on Home and has no route out

`pages/_home-mobile/WhereMoneyGoes.tsx`

Half the donut is *Unsorted* and the legend row isn't tappable. The amber "64
transactions need sorting" banner is the fix, but it's a separate element the eye
reaches second.

- Make the Unsorted legend row a button → `/sort`
- Append the count: `Unsorted · 64 items`

## 3. Two stacked full-width alert banners push the cash card below the fold

`pages/_home-mobile/NextActionCard.tsx`

At 1440×900 the red quarter banner + amber sorting banner + greeting consume ~300px, so
the cash position — the thing people open the app for — starts near the fold.

- Keep the red statutory banner full-width; demote the sorting banner to a single
  inline row directly above the ledger card, or collapse the pair into one banner with
  the second as a secondary line.

## 4. Sidebar "WORK" group label sits above Invoices / Reports / More

`components/common/Layout.tsx`

"More" isn't work — it's navigation. It reads oddly under a WORK heading, and Reports
is arguably not work either.

- Move `More` out of the WORK group to its own ungrouped slot at the bottom.

---

## 5. Cash card's "yours after tax · owed so far" line carries two unrelated figures

`pages/_home-mobile/HeroBalance.tsx`

`£4,954.25 yours after tax · £8,001.67 owed so far` — the first is cash minus tax, the
second is receivables. Two different mental models on one 9px line. Consider moving
"owed so far" into the OWED TO YOU tile it duplicates.

## 6. My Life "Needs action" pills use two visual weights but three urgencies

`pages/_home-mobile/LifeDashboard.tsx` (`bandPill`)

Red solid / amber tint is a good rule, but a 9-day and a 59-day item both land in
amber. A third tier (or showing the date rather than the countdown beyond 30 days)
would make the band scannable.

## 7. Accountant portal: 10 client-detail tabs

`pages/AccountantPortal.tsx` (`DETAIL_TABS`)

Overview / Tax / Ledger / P&L / Receipts / Quarterly / Year-end / Assets / VAT /
Messages. Ten is past the point where a tab row is faster than a menu. Quarterly and
Year-end are already conditionally hidden for Ltd entities — consider grouping
Receipts / Assets / VAT under a "Records" tab.

## 8. Filing & deadlines has 7 tabs behind BottomSheets

`pages/Compliance.tsx` (`VALID_TABS`)

checklist / vat / sa / ct / cis / itsa / registers, each opening a sheet. Worth checking
whether a first-time user can tell which regimes actually apply to them before tapping.

---

## Site-side changes already made to match the app

| Was (site) | Now (from app source) |
|---|---|
| Bottom nav: Home / Activity / Reports / Ask AI | Home / Activity / FAB / My Life / More |
| Momentum pill `↑ £2,140 wk` | `↑ £1.3k net` (`↑ {fmt} net`) |
| Ask bar across the top of the workspace | `Ask Finrock` pill in the sidebar |
| Cash card with 7d/30d/90d/YTD range pills | No range pills on Home (they live on Activity) |
| Income / Expenses / Profit MTD trio | MONEY IN / MONEY OUT + "yours after tax" line |
| 12-month cash flow chart on Home | 30-day sparkline + "Last 30 days" |
| "Needs your attention" card | Red statutory banner + amber sorting banner |
| Flat 12-tile My Life grid | Needs action band → Money → Property & vehicles / You & family / Documents & ID |
| Tile "Documents" | "Other documents" |
| Client pills: Review / Approve / Sign off / Filed ✓ | Open / Ready to file / Overdue / Filed |
| Portal rail: icons only | Clients / Filings / Fees / My firm / My practice |
| Sign in + Get started → `/login`, `/register` | `app.finrock.io/login`, `app.finrock.io/register` |

## Still not matched

The site has no mockups for these, so nothing is wrong — but if you want them
featured, they need building: **Sort** (`To sort` + quarter/Everything scope tiles +
`Sort all {n}`), **Filing & deadlines** (VAT boxes 1–9, status pills), **Invoices**
(HubTabs Invoices / Quotes / Credits with counts), **Personal Tax** (SA sections:
Employment/PAYE, SA103, SA105, dividends, savings, SA108, other income).
