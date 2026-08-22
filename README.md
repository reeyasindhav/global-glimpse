# Global Glimpse

Culturiq- World Cultures & Traditions Encyclopedia

Do not generate images use open source images where needed

Please create a full ui ux design for this website, make sure to have design focused pages
make sure to use and iterate on the given images to create ui, the final site should be production ready with functional implementation.

It should include a minimum of 8 to 10 pages, including login and sign up pages and authenticated pages like the dashboard. The focus should be on design while maitaining all mockup data

add animations to the site, and please give a simple user flow in response

Design Ideas: Vibrant global color palette, country profile pages, festival calendar, food and tradition cards, interactive world map explorer.

Problem Statement:

In an increasingly interconnected world, learning about diverse global cultures, festivals, and culinary traditions often requires sifting through scattered, text-heavy, or unengaging online resources. Most existing platforms lack a unified, interactive space that makes cultural education visually engaging and easy to explore. Culturiq addresses this gap by providing an intuitive educational platform that consolidates worldwide traditions, festival calendars, and cuisines into interactive country profiles and visual maps, making global cultured discovery accessible, structured, and engaging for learners of all backgrounds.

Ask me if you have any questions.
do not use much tokens

This project was built with [Lovable](https://lovable.dev).

I'll build it in one pass: design system, mock data, shared chrome, and 11 routes with a simple localStorage auth.

I've built out most of Culturiq, but the work stopped mid-way, so the site won't compile yet.

What's in place

- Design system in `src/styles.css`: cream/coral/jade/saffron global palette, Bricolage Grotesque + DM Sans, reveal/float/marquee/pin-pop animations as semantic utilities.
- Mock data (`src/lib/data.ts`): 8 countries with facts, traditions, dishes; 10 festivals; 6 stories; derived tradition and dish cards. Images use open-source Picsum URLs (no generated images).
- Shared chrome: sticky header with session-aware sign-in/account, dark footer, scroll-reveal helper, stylised interactive SVG world-map explorer with hoverable country pins.
- Pages: home (hero + search + filters + featured story + map card + festival cards + stories + marquee), explore, festivals calendar, festival detail, traditions, food, stories list, story detail, country profile, about, login, signup (2-step), `_authenticated` gate, dashboard, collection — 14 routes, plus per-route SEO metadata. Auth and saving run on a localStorage context (demo mode, no backend).

What remains (small, one pass)

1. `src/routes/signup.tsx` line 20 has a typo: `component: Signup;` must be `component: Signup,` — this is the only syntax error blocking the build.
2. Then clear the leftover type errors reported earlier: `explore.tsx` search params (use `search['q']` and type `q?: string | undefined`).
3. Quick preview pass to confirm all routes render.

User flow
Land on home → search or filter by theme → open the map explorer → click a country pin/card → read its profile (traditions, dishes, festivals) → jump to a festival or story → save anything → sign up / sign in → dashboard shows streak, regions covered and upcoming festivals → collection holds every save → sign out from the header.

Say the word (once credits are back) and I'll apply those three fixes to get it building.
The build is blocked by one typo I introduced and couldn't fix before running out of turn: in `src/routes/signup.tsx` line 20, `component: Signup;` needs to be `component: Signup,`. That single semicolon is also what cascades into the route-tree build failure.

After that, two small type errors remain in `src/routes/explore.tsx`: the search validator should read `search['q']` (index-signature access) and declare `q?: string | undefined`.

Everything else is written and in place — design system, mock data, shared header/footer/map, and 14 routes including login, signup, the authenticated gate, dashboard and collection.

User flow: home → search/filter → map explorer → country pin → country profile (traditions, dishes, festivals) → festival or story detail → save items → sign up/sign in → dashboard (streak, regions covered, upcoming festivals) → collection → sign out.

Would you like me to apply those three fixes in a new request?

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/028a01d6-10be-41c2-b7ea-b55ceb0f7036).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
