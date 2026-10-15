# Flex Gymnastics AZ — website

An [Astro](https://astro.build) rebuild of flexgymnasticsaz.com. It's a fast, mobile-first static site, styled after the layout of gothamgymnastics.com and using Flex's own colors (purple `#5F3090`, lime `#92D050`, lavender `#B58FDB`).

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built site locally
```

## Where to edit content

| What | File |
| --- | --- |
| Phones, address, email, hours, social links, Jackrabbit/schedule/job links, closures, membership & uniform fees | `src/data/site.ts` |
| **Class schedule** (every schedule table on the site) | `src/data/classes.json` |
| FAQ questions & answers | `src/data/faq.ts` |
| Main navigation & dropdowns | `src/data/nav.ts` |
| Colors, fonts, buttons, spacing | `src/styles/global.css` (tokens at the top) |
| Page copy | `src/pages/*.astro` (one file per page) |

### Updating the class schedule

Every schedule table reads from `src/data/classes.json`. Each class is one row:

```json
{ "program": "girls", "level": "Beginner", "code": "GR1", "day": "Tue",
  "start": "17:00", "end": "18:00", "ageMin": 6, "ageMax": 12, "ages": "6–12 yrs",
  "tuition": 132, "status": "open", "note": "optional small text", "signupUrl": "optional" }
```

- `program`: one of `parent-tot`, `preschool`, `kinder`, `girls`, `boys`, `ninjazone`, `lil-ninja`
- `day`: `Mon` `Tue` `Wed` `Thu` `Fri` `Sat` `Sun`. `start`/`end` use 24-hour `HH:MM`.
- `ageMin`/`ageMax`: years, used by the "Child's age" filter (5 yrs 2 mos = `5.17`)
- `status`:
  - `open` shows a **Sign Up** button
  - `waitlist` shows **Join Waitlist**
  - `closed` shows no button
  - `registrar` shows **Text Registrar** and opens an SMS to 520-263-8795
- `signupUrl` (optional) is a direct Jackrabbit link for that class. When it's blank, the button goes to the main Jackrabbit registration page.
- Change `"updated"` at the top of the file. The "Schedule snapshot updated…" line on the site shows this date.

To add, remove or change a class, edit its row, save, and rebuild/redeploy. Every table also links to the live `flexgyminfo.ddns.net` schedule and to Jackrabbit, so families can always see real-time openings.

### Photos

Every photo spot currently shows a purple/lime placeholder labeled with the shot it needs (for example "Photo: Gymnast on the balance beam…"). To add a real photo:

1. Put the image in `public/images/` (for example `public/images/beam.jpg`).
2. Add `src="/images/beam.jpg"` to that `<Photo … />` tag. Keep the `alt` text.

Images load lazily, except the hero photo.

**Photos currently in use** (in `public/images/`, converted from `Photos/`): seven girls-team photos appear on Home (the hero mosaic, the Teams card and the About collage), on Teams, on Girls Competitive Teams and on Team Development for Girls. All of the supplied files are **206×206 px Instagram thumbnails**, so they look soft at large sizes. Swapping in full-size originals with the same filenames will sharpen them with no code changes.

`leotards-studio.webp` (four girls on a white studio backdrop) is not used yet. It looks like it may be a leotard brand's promo photo, so please confirm the gym owns it before it's used. Also confirm that the gym's media/photo release covers putting team members' photos on the website.

Still placeholders: recreational classes, Parent & Tot, Preschool/Kinder, NinjaZone/Lil' Ninja, boys, the facility, coaches/hiring.

### Logo

Until the real logo is added, the header shows a text "FLEX Gymnastics" wordmark. To use the logo file, save it as `public/images/logo.png` and set `logo: '/images/logo.png'` in `src/data/site.ts`.

### Draft mode (current setup)

This build is a **pitch draft** for showing the gym. Three settings in `src/data/site.ts` control it:

| Setting | Draft (now) | At launch |
| --- | --- | --- |
| `draft` | `true`, adds `noindex, nofollow` to every page so Google ignores the preview | `false` |
| `gtmIds` | `[]`, so the gym's Google Tag Manager is off and preview visits don't count in their analytics | `['GTM-NTHSCCL', 'GTM-MP9GWFGQ']` |
| `showOwnerNotes` | `false`, so the purple "Owner note" boxes are hidden | `true` during a content review with the owner, then `false` |

The owner notes are dashed purple **"Owner note — confirm before launch"** boxes that mark facts needing confirmation. The full list is in "Items for the owner to confirm" below.

## Items for the owner to confirm before launch

1. **Closure dates are from 2025.** The Home page and Calendar also disagree (Thanksgiving Nov 26–28 vs Nov 27; Winter Break Dec 22–31 vs Dec 24–25). Update `closures` in `src/data/site.ts`.
2. **Team seasons are 2025–26**, but membership is already 2026–27. Update `seasons` in `src/pages/annual-calendar.astro`.
3. **NinjaZone ages:** About says 15 months–13 years; everywhere else says 3–13. The site uses 3–13.
4. **Facebook link** (`profile.php?id=61587428198229`) looks like a new or placeholder page. Please confirm it.
5. **`flexgyminfo.ddns.net`** (schedules and job application) runs over plain `http`. Moving it to the main domain with https is recommended.
6. **Girls Advanced and Boys Intermediate/Advanced** have no public class listings. They appear as "Contact the registrar" cards.
7. **Online Fun & Workouts** has been retired: `/online-fun-workouts` now redirects to Home, and the "Links for Other Online Activities" quick link was removed.
8. **Ninja Night dates and pricing** aren't on the current site. There's a placeholder on the NinjaZone page.
9. **Boys PreTeam for Compulsory Team schedule** is "to be determined". There's a placeholder.
10. **Email:** only FlexGymnasticsAZ@gmail.com is used. Consider a branded address later.
11. **Contact form** embeds the existing form (`link.creativelydisruptive.com`), so submissions still go wherever they go today.
12. **Google Tag Manager** containers `GTM-NTHSCCL` and `GTM-MP9GWFGQ` from the current site are kept. To remove them, empty `gtmIds` in `site.ts`.
13. **"LiveChat"** was mentioned on the old Classes page, but no chat widget was found. Add its embed code if it's still in use.

## URLs & redirects

All current WordPress URLs are kept (`/girls-classes/`, `/ninjazone/`, `/faq/`, and so on). Changes:

- `/classes-orig/` → `/classes/` (301)
- `/online-fun-workouts/` → `/` (301)
- New pages: `/classes/` (the hub replacing `/classes-orig/`) and `/teams/` (the Teams hub)

The redirects are set up in three places: `astro.config.mjs` (works anywhere as a meta refresh), `vercel.json` (real 301s on Vercel) and `public/_redirects` (real 301s on Netlify and Cloudflare Pages).

## SEO & accessibility

- Every page has its own `<title>`, meta description and canonical URL, plus Open Graph tags.
- Every page includes `SportsActivityLocation` schema.org data with the address and phone. The FAQ page also has `FAQPage` schema.
- `sitemap-index.xml` is generated on build.
- The site uses semantic landmarks, includes a skip link, and the dropdowns work with the keyboard (Esc closes them). The FAQ accordion uses native `<details>`, and contrast is WCAG AA. Motion is reduced for users who have that preference set.
- On phones, a sticky bottom bar shows **Enroll · Call · Text**.
