# Tone proposal: from CV to personal site

Status: **draft for Daniel to review.** No site code has been touched.
Placeholders look like `[[TODO: …]]`. Sentences where I guessed at *your opinion or voice* (not a fact, but still mine, not yours) are marked `‹voice›`. Keep, rewrite or cut them.

---

## 1. What makes the reference sites feel personal

### borretti.me
- **The home page is a table of contents, not a pitch.** Name, then five links (About, Portfolio, Blog, Fiction, Consulting), each with a small cropped detail from an old painting. No headline, no tagline, no "I'm passionate about…".
- **The about page opens with the plainest possible sentence**: "I'm a software engineer. In my free time I write code, a blog, fiction…". The job takes up one clause. The rest is about what he's *interested in*, written as a list of real topics with opinions attached (e.g. he cares about type systems "not abstractly but with the goal of improving engineering practices").
- **Hobbies and odd things sit next to the professional ones, given the same weight**: lifting, a Goodreads account, a Backloggd (game log) account, podcasts, a webring, a colophon that credits the paintings used as icons. These are what make it feel like a person.
- **No résumé anywhere.** No dates, no employers, no skill bars. Projects are a long, honest list (including small and abandoned ones), each with a one-line description.
- **The design is close to browser defaults**: Times, 16px, black on white, rule lines under headings. Because it's so plain, the writing is the only thing you notice.

### emilkowal.ski
- **Name + role at the very top in small type** ("Emil Kowalski / Design Engineer"), with the role in a muted grey. Nothing is shouting.
- **The first section is "Today"**: two sentences in first person about what he's doing *right now* (currently taking a break; previously Linear and Vercel). His whole work history is that one sentence.
- **Then simple lists: Projects, Writing, More.** Each item is a title + a one-line, slightly opinionated description ("An *opinionated* toast component for React", "Why you are animating more often than you should"). No thumbnails, no tool chips, no cards.
- **Typography does all the design work**: one sans family at 14–16px, two text colours only (near-black `#21201c` for titles, warm grey `#63635e` for descriptions), a warm off-white background `#fdfdfc`, a narrow single column (~480px of text), and big empty gaps *between* sections with tight spacing *within* them.
- **The craft is in the details, not the layout**: weight 500 for labels, 400 for everything else; small, careful hover states. It feels made by hand.

### Common threads (what to steal)
1. **The person comes first, the job comes second.** The job gets a sentence, not a section.
2. **Plain first-person sentences.** No adjectives about yourself ("driven", "skilled", "passionate"). Say what you do and what you like, and let the reader decide.
3. **Lists, not cards.** Title + one honest line, more of them, less decoration.
4. **Hobbies and side interests sit next to the work at the same level**, not as a "fun fact" at the end.
5. **Quiet, readable typography on a light background, one narrow column, nothing full-screen, nothing animated for its own sake.**
6. **Small human touches**: a colophon, the accounts you actually use (Goodreads, Backloggd), the source of the images.

### What the current site does instead
| Current | Why it reads as a CV |
|---|---|
| Rotating "a software engineer who loves Python / UX/UI / photography…" | A tagline. Puts photography and music on the same level as "Python", as items in a list. |
| Projects as image cards with tool chips | Portfolio convention. The chips make it about the tech stack, not about why you built it. |
| Experience timeline with job bullets | Copied from a résumé ("Worked in an agile environment (sprints, code review…)"). |
| Tools grid with logos | Keyword list for recruiters. |
| "A software engineer with 3+ years of professional experience… I'm a driven person…" | Cover-letter language. Also out of date (the last listed job ends Oct 2022). |
| Music and analog photography in one sentence at the very end ("Oh and I'm also *very* into…") | The most personal part is the last thing you read. |
| Big pink/LinkedIn-blue buttons with ring glows, "Download resume" | It's asking to be hired. |

---

## 2. Proposed structure

One page, one narrow column, read top to bottom in about a minute. Plus the existing `/photos` page.

```
Daniel Grijalva                      ← name, weight 500
Software engineer & film photographer ← muted; [[TODO: confirm the pairing]]

[ intro: 3–4 sentences, first person ]

Photographs ─────────────────────────
[ 4–6 recent frames, big, no cards ]
More on the photos page →

Things I've made ────────────────────
Overworld       Track the games you've played.
Ghostwriter     …
…

Work ────────────────────────────────
2022  Turn Technologies   Backend APIs in Python
2021  A Terceros          …
… (one line each)        Full résumé (PDF) →

Elsewhere ───────────────────────────
Email · GitHub · Kaggle · LinkedIn · [[film account?]] · [[music account?]]

footer: colophon (one line)
```

### Section by section

| Section | Verdict | Notes |
|---|---|---|
| Rotating headline | **Cut.** | Replace with name + one muted line, then a plain intro paragraph. Also removes the only client-side script on the page. |
| Intro / About | **Merge and move to the top.** | Today there's a headline at the top and "About me" near the bottom. Fold them into one first-person intro under your name (copy below). No "About me" heading needed. Keep the avatar? Optional: small (48–64px, not round-and-huge) next to the name, or drop it and let the photos be the images. My vote: drop it. |
| **Photography** | **Promote to second place, make it bigger.** | Directly after the intro, before anything about software. 4–6 frames at a real size (full column width, or a 2-column grid that breaks out a bit wider than the text column), no rounded corners, no hover zoom. A one-line caption per frame in small mono text (place · camera · film stock), like the edge print on a negative. Link to `/photos`. The `/photos` page gets the same visual treatment (light background, quiet captions). |
| Projects | **Keep, as a text list.** | Title + one line, no thumbnails, no tool chips. Rewrite descriptions in your voice (see below). Drop "Portfolio — This website!" (it goes in the colophon). Consider merging "Web scraping" and "Datasets" into one line about data. |
| Experience timeline | **Shrink to ~5 lines.** | Year, company, one short phrase. No bullets. Link to the résumé PDF at the end for anyone who wants it. If you're happy losing it entirely (Emil does), the intro sentence that names past employers is enough. My vote: keep the five-line version. Recruiters still find it, and it doesn't take over the page. |
| Tools / skillset grid | **Cut.** | The intro says "mostly Python" and the project lines say what they're built with. Logos for HTML/CSS/Git/Heroku don't tell anyone anything about you. |
| Contact | **Turn into "Elsewhere".** | One line of plain links. Email first, written out as text. No LinkedIn-blue / pink glow buttons. The résumé link moves to the Work section. |
| *New:* colophon footer | **Add (small).** | One line: "Built with Astro, hosted on Cloudflare. Photos [[TODO: shot on … / scanned with …]]." This is the borretti-style human touch, and it's where "this website" stops being a project card. |
| *Optional:* "Now" / music line | **Your call.** | If music matters as much as photography, it deserves more than one adjective. A single line ("Lately I've been listening to [[TODO]]") or a link to Last.fm / RYM / a playlist works. Don't build a music section unless you have something to put there. |
| *Optional:* writing | **Not now.** | Both reference sites lean on writing. If you ever start writing (film notes, gear, dev posts), add a "Writing" list between Photographs and Things I've made. Nothing to do for this pass. |

Page `<title>`: just **"Daniel Grijalva"** (not "Daniel Grijalva - Software Engineer"). Meta description: the first sentence of the intro.

---

## 3. Rewritten copy

Written in short, plain first-person sentences. Everything in `[[TODO]]` is something I don't know. Lines marked `‹voice›` put words in your mouth. Check those.

### Header
> **Daniel Grijalva**
> Software engineer & film photographer `[[TODO: or "Software engineer. Shoots film." / "Software engineer in México"? Your call on whether photography goes in the title line.]]`

### Intro (top of the page, replaces the rotating headline *and* "About me")

**Option A (shorter, Emil-style):**

> I'm Daniel, a software engineer from `[[TODO: city]]`, México. These days I `[[TODO: what you do now: company/role, freelancing, taking a break, building something of your own]]`. Before that I spent a few years building backends and web apps, mostly in Python.
>
> Outside of work I shoot film, and I'm very into music. The photographs below are mine.

**Option B (longer, more personal, borretti-style):**

> I'm Daniel. I write software for a living and shoot film when I'm not. I live in `[[TODO: city]]`, México.
>
> Right now I `[[TODO: current work]]`. Before that I built backend APIs at Turn Technologies, an internal ERP at A Terceros (from scratch), and a lot of scrapers and small web apps for freelance clients. I mostly write Python. I keep drifting toward the interface side, though, because I care how things feel to use. `‹voice›`
>
> I shoot on `[[TODO: camera(s)]]`, usually `[[TODO: film stock(s)]]`. `[[TODO: optional, one honest line on why film: e.g. what you like about it. Don't let me write this one for you.]]` I'm also very into music: `[[TODO: listening? playing? an instrument? genres or a few artists?]]`. A long time ago I worked as a freelance video editor, too.
>
> If any of this sounds interesting, email me.

Notes on the copy:
- "3+ years of professional experience" is gone. Years-of-experience is a résumé metric, and the number was out of date anyway.
- "Driven person", "skilled in software development", "effectively manage my time", "collaborate with others to form a successful team" are all gone. They're claims a reader can't check and don't remember.
- The "UI/UX, front-end and data science" interests survive as one concrete sentence instead of a list of buzzwords. If "care how things feel to use" isn't true for you, cut it.
- The video-editing line was a "fun fact" in the Upwork bullets. It's a better fit here.

### Photographs
> **Photographs**
> *(frames)*
> Captions, per photo, small mono: `[[place]] · [[camera]] · [[film stock]]`. These come from `photos.json`; if the data doesn't have these fields yet, the caption can be just the place, or nothing.
> **More on the photos page →**

(`src/data/photos.json` is currently `[]`, so the home page will show the empty state until photos are uploaded with `npm run photos:add`. The section needs a quiet empty state ("Photos coming soon" is fine) so the page doesn't break before then.)

### Things I've made
Title + one line, in your voice. Facts come from the current site; edit freely.

| Title | Line |
|---|---|
| Overworld | A site for keeping track of the games I've played. Django and React. |
| Ghostwriter | An experiment in AI-assisted writing, built with Keras and Vue. |
| Sistema A3 | The property system I built for a real-estate company, front to back. |
| Datasets | Datasets I've put together on Kaggle to answer questions I was curious about. |
| Scrapers | A pile of web scrapers, mostly for freelance clients. |

### Work
> 2022 · Turn Technologies · Backend APIs and third-party integrations
> 2021 · A Terceros · Built their internal web app from scratch
> 2020 · Freelance (Upwork) · Scrapers, data cleanup, Django sites, some video editing
> 2019 · Nearsoft · Full-stack features in Flask and React
> 2018 · Prodigia · Route optimisation with the Google Maps API
> `[[TODO: anything after Oct 2022? The site currently stops there.]]`
> **Full résumé (PDF) →**

### Elsewhere
> Email `danielgrisoto@gmail.com` · GitHub · Kaggle · LinkedIn `[[TODO: a film/photo account? Last.fm / RYM / Spotify for music? Backloggd, if Overworld means you log games?]]`

### Colophon (footer)
> Built with Astro and hosted on Cloudflare. Photos `[[TODO: shot on … / scanned on …]]`.

---

## 4. Visual direction

Move from **dark, full-screen sections, big Poppins headings, cards, glows** to **a light, quiet, single-column page where the photographs are the only big things.**

### Colour
- **Light, warm paper background.** Something like `#fbfaf7` (a hair warmer than Emil's `#fdfdfc`; it should feel like the white border of a print, not a screen).
- **Two text colours, both warm:** ink `#1f1e1a` for names/titles, muted `#6b6a63` for descriptions, dates, captions.
- **One accent, used only for links and hover states.** Two options:
  - keep a desaturated version of the current pink (continuity with the old site), or
  - a film-orange like `#c2410c` (a nod to the orange base of colour negatives / film boxes).
  My vote: the film-orange. It ties the colour to the photography instead of to nothing in particular.
- **Dark mode via `prefers-color-scheme`**, also warm (`#161512` background, `#e9e7e1` text). Not zinc-900, and never the only option. Photos look good on both.
- No shadows, no glow rings, no gradients, no rounded "card" surfaces.

### Type
- **Drop Poppins.** It's the main thing that makes the current site feel like a template.
- **One readable text family at 16px / ~1.6 line-height**, weights 400 and 500 only. Candidates (all on Google Fonts): **Inter Tight**, **Instrument Sans**, or a quiet serif like **Newsreader** if you want a bit of borretti's bookishness. My vote: a sans for body (Instrument Sans), so it stays in Emil's register.
- **A monospace for metadata only**: photo captions, years in the Work list, the colophon. E.g. **JetBrains Mono** or **IBM Plex Mono** at 12–13px in the muted colour. This gives the "edge print on a negative" feel and is the one bit of character on an otherwise plain page.
- Section labels ("Photographs", "Things I've made", "Work", "Elsewhere") are body-sized, weight 500, not big headings. Hierarchy comes from spacing, not size.

### Density and layout
- **Text column ~36–40rem (≈ 560–640px)**, left-aligned on desktop with a generous left margin, centered on mobile with 16–20px gutters.
- **Photographs can break out wider** than the text column (e.g. up to ~56rem) so they get the room the text doesn't need.
- **No full-viewport sections.** Gaps of ~5–6rem between sections, ~0.75–1rem between items inside a section.
- **Lists, not cards.** Project and Work rows are a single line on desktop (title left, description muted to the right or underneath).
- **Motion:** none on load. Hover = colour change on links, maybe a very short underline transition. No translate-up cards, no scale on photos, no rotating text.
- **Photos:** square corners (or at most 2px), no frames, no shadows, true aspect ratios (the data already has width/height), lazy-loaded below the fold.

### What this deletes from the codebase (for step 2)
`.card`, `.card-hover`, `.tool-list` component classes; the passions rotator script; the icons in `src/assets/icons/*` (tool logos and the MX flag); the project banner images in `src/assets/images/*` (no longer shown); the Poppins font link; the LinkedIn/resume button styles; `theme-color #18181b` (becomes the paper colour). I'll confirm against the committed port before deleting anything.

---

## 5. Decisions (Daniel, 2026-11-08) and final copy for step 2

Direction approved. Answers:
- **Location:** just "México".
- **Now:** software consultant at Improving (building web services and platforms at scale for large customers: Python, AWS, Terraform/IaC, AI and vision pipelines, SageMaker). Owns **BeeMaps** (beemaps.com.mx), a real-estate platform for brokers and buyers in north-west México. Rebuilding **Overworld** as a modern app (WIP).
- **Camera:** mostly a Minolta SRT 101. Film varies: CineStill 800T, Fuji 400, Ilford 3200 (Delta), Kodak Portra 160, Kodak ColorPlus.
- **Music:** listens (Last.fm `jdgsgt`), wants to start music projects later.
- **Intro:** option A. **Accent:** film-orange. **Avatar:** small, next to the name in the header only. **Work:** keep the short list.

### Final intro (option A, filled in)
> I'm Daniel, a software engineer in México. These days I'm a consultant at Improving, building web services and platforms for large customers, mostly in Python on AWS, lately with a lot of AI and vision pipelines. I also run BeeMaps, a real-estate platform for brokers and buyers in north-west México.
>
> Outside of work I shoot film, mostly on a Minolta SRT 101, and I listen to a lot of music. The photographs below are mine.

Revenue (the $50K+ MRR) is **left off the page on purpose**. It reads as a pitch, which is what we're moving away from, and it's sensitive business data on a public page. Easy to add back to the BeeMaps line if you want it.

### Things I've made (updated)
| Title | Line |
|---|---|
| BeeMaps | A real-estate platform for brokers and buyers in north-west México. I built it and I run it. |
| Overworld | A site for keeping track of the games I've played. Currently rebuilding it from scratch. |
| Ghostwriter | An experiment in AI-assisted writing, built with Keras and Vue. |
| Sistema A3 | The property system I built for a real-estate company, front to back. |
| Datasets | Datasets I've put together on Kaggle to answer questions I was curious about. |
| Scrapers | A pile of web scrapers, mostly for freelance clients. |

### Work (updated)
> 2024–now · BeeMaps · Founder (started Aug 2024, live since Apr 2025)
> 2022–now · Improving · Consulting: platforms, AWS/Terraform, AI and vision pipelines (since Dec 2022)
> 2022 · Turn Technologies · Backend APIs and third-party integrations
> 2021 · A Terceros · Built their internal web app from scratch
> 2020 · Freelance (Upwork) · Scrapers, data cleanup, Django sites, some video editing
> 2019 · Nearsoft · Full-stack features in Flask and React
> 2018 · Prodigia · Route optimisation with the Google Maps API
No résumé link for now (the Drive copy is out of date). The Download resume button goes away entirely.

### Captions
`place · Minolta SRT 101 · film stock`, coming from optional fields in `photos.json`. Camera can be omitted when it's the SRT 101 if repeating it on every frame feels noisy.

### Elsewhere
> Email · GitHub · Kaggle · LinkedIn · Last.fm (`jdgsgt`)

### Colophon
> Built with Astro and hosted on Cloudflare. Photos shot on film, mostly with a Minolta SRT 101.

### Still open
Nothing. Step 2 starts once the Astro port is committed and Daniel says it has landed.

## 6. Original questions (answered above)
1. **City** (or just "México")?
2. **What do you do now?** The site's last job ends Oct 2022.
3. **Camera(s) and film stock(s)**, and do you want those in captions? Does `photos.json` carry place/camera/film fields, or should the captions be just a place?
4. **Music: listening, playing, or both?** Any account (Last.fm, RYM, Spotify, Bandcamp) worth linking?
5. **Intro option A or B** (or a mix)?
6. **Accent colour:** film-orange or keep the pink?
7. **Keep the avatar** anywhere, or let the photos stand in for you?
8. **Keep a short Work list + résumé link**, or drop work history to the one sentence in the intro?
