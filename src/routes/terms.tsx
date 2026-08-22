import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Culturiq" },
      {
        name: "description",
        content:
          "Culturiq terms of use: your rights and obligations, licensing, disclaimers, and how to contact us.",
      },
      { property: "og:title", content: "Terms of Use — Culturiq" },
      { property: "og:description", content: "The terms governing your use of Culturiq." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-20">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Terms</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 22, 2026</p>
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <p className="text-muted-foreground">
          These Terms of Use ("Terms", "Terms of Use") govern your access to and use of the Culturiq
          website and related services (the "Service"). By accessing or using the Service, you agree
          to be bound by these Terms. If you do not agree with any part of these Terms, you may not
          access or use the Service.
        </p>
        <p className="mt-4 text-muted-foreground">
          We may update these Terms from time to time. The "Last updated" date at the top reflects
          the most recent revision. Your continued use of the Service after any changes constitutes
          your acceptance of the revised Terms.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          1. Eligibility
        </h2>
        <p className="mt-2 text-muted-foreground">
          You must be at least 13 years old (or the age of digital consent in your jurisdiction, if
          higher) to use the Service. If you are under 18, you represent that you have obtained the
          consent of a parent or legal guardian to use the Service.
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          2. License
        </h2>
        <p className="mt-2 text-muted-foreground">
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
          license to access and use the Service for your personal, non-commercial use and in
          accordance with these Terms. This license does not include:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            Any resale or commercial use of the Service or its content, unless otherwise agreed in
            writing.
          </li>
          <li>Any collection, aggregation, or harvesting of content from the Service.</li>
          <li>
            Any use of the Service that could damage, disable, or impair the Service or interfere
            with any other party's use of the Service.
          </li>
        </ul>
      </Reveal>

      <Reveal delay={200} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          3. Accounts
        </h2>
        <p className="mt-2 text-muted-foreground">
          You are not required to create an account to browse the Service. If you choose to create
          an account, you agree to provide accurate, complete, and current information and to
          promptly update such information. You are responsible for maintaining the confidentiality
          of your account credentials and for all activities that occur under your account.
        </p>
        <p className="mt-2 text-muted-foreground">
          To save items and access personalized features such as the dashboard and collection, you
          must sign in. We may terminate or suspend your account at any time, with or without cause
          or notice, at our sole discretion.
        </p>
      </Reveal>

      <Reveal delay={240} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          4. User Content
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service may allow you to submit, post, or display content such as comments, notes, or
          other materials ("User Content"). By submitting User Content, you grant us a worldwide,
          royalty-free, perpetual, irrevocable, non-exclusive license to use, modify, publish,
          translate, create derivative works from, distribute, and display such content in
          connection with the Service.
        </p>
        <p className="mt-2 text-muted-foreground">
          You represent and warrant that you own or have the necessary rights, licenses, and
          permissions to submit your User Content and that it does not violate these Terms or the
          rights of any third party. We do not endorse any User Content and are not responsible for
          its accuracy or legality.
        </p>
      </Reveal>

      <Reveal delay={280} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          5. Content Ownership
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service and all content, features, and functionality (including but not limited to
          text, graphics, logos, images, audio, data compilations, software, and the selection and
          arrangement thereof) are the property of Culturiq or its licensors and are protected by
          copyright, trademark, and other intellectual property laws.
        </p>
        <p className="mt-2 text-muted-foreground">
          Some content on the Service — particularly the factual content about countries,
          traditions, festivals, and cuisines — may be derived from public domain or third-party
          sources. We do not claim ownership of such underlying facts. Where applicable, attribution
          is provided to the original source.
        </p>
      </Reveal>

      <Reveal delay={320} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          6. Prohibited Conduct
        </h2>
        <p className="mt-2 text-muted-foreground">You agree not to use the Service to:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>Submit false or misleading information.</li>
          <li>
            Impersonate any person or entity or misrepresent your affiliation with a person or
            entity.
          </li>
          <li>Upload, post, or transmit any content that is defamatory, obscene, or infringing.</li>
          <li>Interfere with or disrupt the Service or any server or network connected to it.</li>
          <li>Attempt to gain unauthorized access to any portion of the Service.</li>
          <li>
            Use any automated means, including bots, scraping, or data mining, without our express
            written consent.
          </li>
        </ul>
      </Reveal>

      <Reveal delay={360} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          7. Third-Party Services
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service may contain links to third-party websites or services that are not owned or
          controlled by Culturiq. We do not endorse or assume responsibility for these third
          parties, their content, privacy policies, or practices. You acknowledge and agree that we
          shall not be liable for any damage or loss caused by reliance on such third-party
          services.
        </p>
      </Reveal>

      <Reveal delay={400} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          8. Disclaimers
        </h2>
        <p className="mt-2 text-muted-foreground">
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any
          kind, either express or implied. We do not warrant that the Service will be uninterrupted,
          secure, or error-free, or that any defects will be corrected.
        </p>
        <p className="mt-2 text-muted-foreground">
          While we strive to ensure the accuracy of the content on the Service, the information may
          contain errors or inaccuracies. We do not warrant that any content will be accurate,
          complete, reliable, or current, and expressly disclaim all warranties and conditions of
          any kind, whether express, implied, or statutory.
        </p>
      </Reveal>

      <Reveal delay={440} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          9. Limitation of Liability
        </h2>
        <p className="mt-2 text-muted-foreground">
          To the fullest extent permitted by law, in no event shall Culturiq, its directors,
          employees, partners, suppliers, or licensors be liable for any indirect, incidental,
          special, consequential, or punitive damages, including without limitation, loss of
          profits, data, use, goodwill, or other intangible losses, resulting from your access to or
          use of or inability to access or use the Service, even if we have been informed of the
          possibility of such damages.
        </p>
        <p className="mt-2 text-muted-foreground">
          Our total liability to you for any cause whatsoever and in any form arising out of or in
          any way related to the Service shall be limited to the greater of (a) the amount you paid
          us in the twelve (12) months preceding the event giving rise to the claim, or (b) one
          hundred dollars ($100).
        </p>
      </Reveal>

      <Reveal delay={480} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          10. Indemnification
        </h2>
        <p className="mt-2 text-muted-foreground">
          You agree to indemnify, defend, and hold harmless Culturiq, its affiliates, officers,
          directors, employees, agents, licensors, and suppliers from and against any claims,
          liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees)
          arising out of or in any way connected with your access to or use of the Service, your
          violation of these Terms, or your violation of any third-party right.
        </p>
      </Reveal>

      <Reveal delay={520} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          11. Governing Law
        </h2>
        <p className="mt-2 text-muted-foreground">
          These Terms shall be governed by and construed in accordance with the laws of the State of
          California, United States, without regard to its conflict of law principles. Any dispute
          arising out of or in connection with these Terms or the Service shall be subject to the
          exclusive jurisdiction of the state and federal courts located in San Francisco County,
          California, except where the applicable law requires a different forum.
        </p>
      </Reveal>

      <Reveal delay={560} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          12. Dispute Resolution
        </h2>
        <p className="mt-2 text-muted-foreground">
          If a dispute arises out of or relates to these Terms or the Service, we encourage you to
          contact us first so we can attempt to resolve the dispute. If we cannot resolve the
          dispute informally, any dispute shall be resolved exclusively in the state and federal
          courts located in San Francisco County, California, and you consent to the personal
          jurisdiction of such courts.
        </p>
      </Reveal>

      <Reveal delay={600} className="mt-10">
        <h2 className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
          13. Contact Us
        </h2>
        <p className="mt-2 text-muted-foreground">
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
          <li>
            By email:{" "}
            <a
              href="mailto:terms@culturiq.com"
              className="text-primary underline decoration-primary/30 underline-offset-2"
            >
              terms@culturiq.com
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
