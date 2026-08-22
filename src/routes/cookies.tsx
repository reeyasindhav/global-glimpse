import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Culturiq" },
      {
        name: "description",
        content: "Culturiq cookie policy: how we use cookies and similar tracking technologies.",
      },
      { property: "og:title", content: "Cookie Policy — Culturiq" },
      { property: "og:description", content: "How Culturiq uses cookies." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Cookies</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 22, 2026</p>
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <p className="text-muted-foreground">
          This Cookie Policy explains how Culturiq ("we", "us", or "our") uses cookies and similar
          tracking technologies when you visit our website and related services (the "Service").
          This policy is part of our{" "}
          <a
            href="/privacy"
            className="text-primary underline decoration-primary/30 underline-offset-2"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p className="mt-4 text-muted-foreground">
          By using the Service, you consent to the use of cookies in accordance with this Cookie
          Policy.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          1. What Are Cookies?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Cookies are small text files that are stored on your device (computer, tablet, or mobile)
          when you visit a website. They are widely used to make websites work more efficiently and
          to provide information to the website owners. Cookies may either be "session" cookies
          (which expire when you close your browser) or "persistent" cookies (which remain on your
          device for a set period or until deleted). We also use similar tracking technologies such
          as web beacons, tags, and scripts.
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          2. How We Use Cookies
        </h2>
        <p className="mt-2 text-muted-foreground">
          We use cookies and similar tracking technologies for several purposes:
        </p>

        <h3 className="mt-6 text-xl font-bold">Essential Cookies</h3>
        <p className="mt-2 text-muted-foreground">
          These cookies are necessary for the Service to function properly. Without these cookies,
          certain features may not be available to you. For example, they enable core
          functionalities such as authentication, security, and load balancing. You may not opt out
          of these cookies.
        </p>

        <h3 className="mt-6 text-xl font-bold">Performance Cookies</h3>
        <p className="mt-2 text-muted-foreground">
          These cookies help us understand how visitors interact with the Service by collecting
          information about how it is used (such as which pages are visited, how long visitors stay,
          and whether they encounter error messages). This helps us improve the performance and
          usability of the Service.
        </p>

        <h3 className="mt-6 text-xl font-bold">Functionality Cookies</h3>
        <p className="mt-2 text-muted-foreground">
          These cookies enable enhanced functionality and personalization. They may be set by us or
          by third-party providers whose services we have added to our pages. If you do not allow
          these cookies, some or all of these services may not function properly.
        </p>

        <h3 className="mt-6 text-xl font-bold">Targeting / Advertising Cookies</h3>
        <p className="mt-2 text-muted-foreground">
          These cookies may be set through our Service by our advertising partners. They may be used
          to build a profile of your interests and show you relevant advertisements on our Service
          or other sites. We do not use targeting cookies for children.
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          3. Cookies We Use
        </h2>
        <p className="mt-2 text-muted-foreground">
          Below is a summary of the categories of cookies we may use:
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">
              <span className="text-primary">_ga</span> — Google Analytics (Analytics)
            </p>
            <p className="text-sm text-muted-foreground">
              Used to distinguish users and sessions. Persists for up to 2 years.
            </p>
          </div>

          <div>
            <p className="font-medium">
              <span className="text-primary">session_id</span> — Culturiq session (Essential)
            </p>
            <p className="text-sm text-muted-foreground">
              Maintains your session while you navigate the Service. Expires at the end of your
              browser session.
            </p>
          </div>

          <div>
            <p className="font-medium">
              <span className="text-primary">remember_user</span> — Authentication (Essential)
            </p>
            <p className="text-sm text-muted-foreground">
              Remembers your login status so you do not have to sign in on each visit. Persists for
              up to 30 days.
            </p>
          </div>

          <div>
            <p className="font-medium">
              <span className="text-primary">preferences</span> — Settings (Functionality)
            </p>
            <p className="text-sm text-muted-foreground">
              Remembers your language, region, and display preferences. Persists for up to 1 year.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={240} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          4. Third-Party Cookies
        </h2>
        <p className="mt-2 text-muted-foreground">
          We may allow trusted third parties to set cookies when you use the Service. For example,
          we may use Google Analytics to help us understand how users interact with the Service.
          These third parties may collect information about your online activities over time and
          across different websites. We are not responsible for the cookies used by these third
          parties. Please review their respective privacy policies:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            Google Analytics:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/30 underline-offset-2"
            >
              https://policies.google.com/privacy
            </a>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={280} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          5. How to Control Cookies
        </h2>
        <p className="mt-2 text-muted-foreground">
          You have the right to decide whether to accept or reject cookies. Here are the ways you
          can control cookies:
        </p>
        <h3 className="mt-6 text-xl font-bold">Browser Settings</h3>
        <p className="mt-2 text-muted-foreground">
          Most web browsers are set to accept cookies by default. You can usually change your
          browser settings to remove or reject cookies. Please be aware that if you disable cookies,
          some features of the Service may not work properly. For more information about how to
          manage cookies in your browser, visit:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>Google Chrome: Settings → Privacy and security → Cookies and other site data</li>
          <li>Firefox: Options → Privacy &amp; Security → Cookies and Site Data</li>
          <li>Safari: Preferences → Privacy → Cookies and website data</li>
          <li>
            Microsoft Edge: Settings → Cookies and site permissions → Manage and delete cookies and
            site data
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-bold">Opt-out of Interest-Based Targeting</h3>
        <p className="mt-2 text-muted-foreground">
          You can opt out of interest-based advertising from participating companies through your
          browser's "Do Not Track" settings or industry programs such as the{" "}
          <a
            href="https://optout.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/30 underline-offset-2"
          >
            Digital Advertising Alliance (DAA)
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={320} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          6. How Long We Keep Cookies
        </h2>
        <p className="mt-2 text-muted-foreground">
          The length of time that cookies are stored on your device depends on the type of cookie.
          Session cookies are deleted when you close your browser. Persistent cookies remain on your
          device for as long as necessary to fulfill the purposes described in this policy, unless
          you delete them sooner through your browser settings.
        </p>
      </Reveal>

      <Reveal delay={360} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          7. Changes to This Cookie Policy
        </h2>
        <p className="mt-2 text-muted-foreground">
          We may update this Cookie Policy from time to time to reflect changes in our practices or
          for other operational, legal, or regulatory reasons. When we do, we will revise the "Last
          updated" date at the top of this policy. We encourage you to review this page periodically
          for any changes.
        </p>
      </Reveal>

      <Reveal delay={400} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          8. Contact Us
        </h2>
        <p className="mt-2 text-muted-foreground">
          If you have any questions about the cookies we use or this Cookie Policy, please contact
          us:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            By email:{" "}
            <a
              href="mailto:privacy@culturiq.com"
              className="text-primary underline decoration-primary/30 underline-offset-2"
            >
              privacy@culturiq.com
            </a>
          </li>
          <li>
            By mail: Culturiq, Legal Department, 123 Culture Street, San Francisco, CA 94102, USA.
          </li>
        </ul>
      </Reveal>
    </div>
  );
}
