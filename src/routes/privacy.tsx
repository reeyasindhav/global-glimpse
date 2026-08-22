import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Culturiq" },
      {
        name: "description",
        content:
          "Culturiq privacy policy: what data we collect, how we use it, your rights, and how to contact us.",
      },
      { property: "og:title", content: "Privacy Policy — Culturiq" },
      { property: "og:description", content: "How Culturiq collects and uses your data." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Privacy</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 22, 2026</p>
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <p className="text-muted-foreground">
          Culturiq ("we", "us", or "our") operates the Culturiq website and related services
          (together, the "Service"). This Privacy Policy explains how we collect, use, and protect
          your information when you visit{" "}
          <a
            href="https://www.culturiq.com"
            className="text-primary underline decoration-primary/30 underline-offset-2"
          >
            https://www.culturiq.com
          </a>
          .
        </p>
        <p className="mt-4 text-muted-foreground">
          By using the Service, you agree to the collection and use of information in accordance
          with this Privacy Policy. If you do not agree, please do not use the Service.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          1. Information We Collect
        </h2>
        <h3 className="mt-4 text-xl font-bold">Information you provide to us</h3>
        <p className="mt-2 text-muted-foreground">
          We do not require you to create an account to browse the Service. However, you may choose
          to create an account by providing certain personal information to us. This may include:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>Account credentials — name, email address, and a password.</li>
          <li>
            Profile information you add — for example, your location (country or region) and
            preferred units.
          </li>
          <li>
            Content you submit through the Service — for example, saved items, notes, and public
            contributions such as comments or edits to country profiles.
          </li>
          <li>
            Communications you send to us, such as support requests or newsletter subscriptions.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-bold">Information collected automatically</h3>
        <p className="mt-2 text-muted-foreground">
          When you visit or interact with the Service, we and our service providers may
          automatically collect certain technical and usage information, including:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Log data</span> — your device's Internet
            Protocol address, browser type and version, the pages you visit, the time and date of
            your visit, the referring URL, and other diagnostic information.
          </li>
          <li>
            <span className="font-medium text-foreground">Cookies and similar tracking data</span> —
            see the "Cookies" section below for details.
          </li>
          <li>
            <span className="font-medium text-foreground">Usage data</span> — information about how
            you use the Service, such as which countries, festivals, or dishes you view and the
            features you interact with.
          </li>
          <li>
            <span className="font-medium text-foreground">Device data</span> — type of browser,
            operating system, mobile device, and device identifiers.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-bold">Information from third parties</h3>
        <p className="mt-2 text-muted-foreground">
          We may receive information about you from third parties. For example, if you connect your
          account to a third-party service such as Google, we may receive information from that
          service in accordance with its terms and privacy policy.
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          2. How We Use Your Information
        </h2>
        <p className="mt-2 text-muted-foreground">
          We use the information we collect for the following purposes:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            To provide, operate, and maintain the Service, including personalized content and
            recommendations based on your interests and saved items.
          </li>
          <li>
            To improve, personalize, and expand the Service — for example, to remember your
            preferences and language selection.
          </li>
          <li>
            To send you service-related notifications, such as changes to your account or important
            updates about the Service.
          </li>
          <li>
            To send you marketing and promotional communications if you have subscribed (you may opt
            out at any time).
          </li>
          <li>
            To analyze how the Service is used and to monitor and improve its performance and
            safety.
          </li>
          <li>
            To detect fraud, security incidents, and to protect our rights, property, or the safety
            of our users or others.
          </li>
        </ul>
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          3. How We Share Your Information
        </h2>
        <p className="mt-2 text-muted-foreground">
          We do not sell your personal data. We do not share your personal information with third
          parties except as described in this Privacy Policy:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Service providers</span> — we may share
            information with third-party companies and individuals that perform services on our
            behalf (such as analytics, hosting, payment processing, and customer support).
          </li>
          <li>
            <span className="font-medium text-foreground">Aggregate or anonymized data</span> — we
            may share aggregated, de-identified, or anonymized information that cannot reasonably be
            used to identify you.
          </li>
          <li>
            <span className="font-medium text-foreground">With your consent</span> — we may share
            information for other purposes with your explicit consent.
          </li>
          <li>
            <span className="font-medium text-foreground">Legal obligations</span> — we may disclose
            information if required by law, to comply with legal processes, to protect our rights or
            property, or to respond to lawful requests from public authorities.
          </li>
        </ul>
      </Reveal>

      <Reveal delay={240} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          4. Cookies and Similar Tracking Technologies
        </h2>
        <p className="mt-2 text-muted-foreground">
          We use cookies and similar tracking technologies to collect information and store it.
          Cookies are small data files stored on your device. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent. If you do not accept
          cookies, you may not be able to use some portions of the Service.
        </p>
        <p className="mt-2 text-muted-foreground">Examples of tracking technologies we use:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Essential cookies</span> — necessary for
            the Service to function (for example, to authenticate your account).
          </li>
          <li>
            <span className="font-medium text-foreground">Performance cookies</span> — to understand
            how visitors use the Service and to measure its performance.
          </li>
          <li>
            <span className="font-medium text-foreground">Functionality cookies</span> — to remember
            your preferences and provide enhanced features.
          </li>
          <li>
            <span className="font-medium text-foreground">Analytics cookies</span> — to help us
            understand how the Service is used, for example with services like Google Analytics.
          </li>
        </ul>
        <p className="mt-2 text-muted-foreground">
          Our service providers may also place cookies and web beacons on the Service for their own
          analytics and advertising purposes.
        </p>
      </Reveal>

      <Reveal delay={280} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          5. Do Not Track and Your Rights
        </h2>
        <p className="mt-2 text-muted-foreground">
          Some browsers have a "Do Not Track" feature that signals to websites that you do not want
          your online activities to be tracked. Because there is no industry-wide standard for how
          to respond to DNT signals, we do not specifically respond to DNT browser signals at this
          time.
        </p>
        <h3 className="mt-6 text-xl font-bold">Your rights</h3>
        <p className="mt-2 text-muted-foreground">
          Depending on your location and applicable law, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>The right to access and obtain a copy of your personal data.</li>
          <li>The right to rectify or correct inaccurate personal data.</li>
          <li>The right to erase or delete your personal data (subject to legal limitations).</li>
          <li>The right to restrict or object to the processing of your personal data.</li>
          <li>
            The right to data portability — to receive your data in a structured, commonly used, and
            machine-readable format.
          </li>
          <li>The right to withdraw consent at any time.</li>
        </ul>
        <p className="mt-2 text-muted-foreground">
          To make such a request, please contact us using the details in the "Contact Us" section
          below. We will respond to your request within a reasonable time in accordance with
          applicable law.
        </p>
      </Reveal>

      <Reveal delay={320} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          6. Data Retention
        </h2>
        <p className="mt-2 text-muted-foreground">
          We retain the information we collect for as long as necessary to provide the Service and
          for legitimate business purposes, or as required by law. If you delete your account, we
          will delete your personal information within a reasonable period, except where we need to
          retain certain information for legitimate interests (such as completing transactions,
          enforcing our agreements, or for security and fraud prevention).
        </p>
      </Reveal>

      <Reveal delay={360} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          7. Children's Privacy
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service is not intended for and we do not knowingly collect personal information from
          children under the age of 13 (or 16 in the European Economic Area). If you are a parent or
          guardian and you believe we have collected personal information from a child without
          verified parental consent, please contact us. We will take steps to delete the information
          in such cases.
        </p>
      </Reveal>

      <Reveal delay={400} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          8. International Data Transfers
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service is operated in the United States and other jurisdictions. If you are located
          in a jurisdiction with different data protection laws, please be aware that your personal
          data may be transferred to, stored, and processed in countries other than your own. By
          using the Service, you consent to such transfers.
        </p>
      </Reveal>

      <Reveal delay={440} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          9. Links to Other Websites
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service may contain links to other websites or services that are not operated by us.
          If you click on a third-party link, you will be directed to that third party's site. We
          strongly advise you to review the Privacy Policy of every site you visit. We have no
          control over and assume no responsibility for the content, privacy policies, or practices
          of any third-party sites or services.
        </p>
      </Reveal>

      <Reveal delay={480} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          10. Changes to This Privacy Policy
        </h2>
        <p className="mt-2 text-muted-foreground">
          We may update our Privacy Policy from time to time. We will post any changes on this page
          and, where the change is material, we may notify you by email or through the Service. The
          "Last updated" date at the top of this policy reflects the date of the most recent
          revision.
        </p>
      </Reveal>

      <Reveal delay={520} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          11. Contact Us
        </h2>
        <p className="mt-2 text-muted-foreground">
          If you have any questions about this Privacy Policy, the practices of the Service, or your
          interaction with the Service, please contact us:
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
