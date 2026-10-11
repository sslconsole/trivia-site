import type { Metadata } from "next";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const COLORS = {
  background: "#1a1a2e",
  surface: "#16213e",
  primary: "#2ecc71",
  text: "#ffffff",
  textMuted: "#888888",
  gold: "#F5A623",
};

const PRIVACY_POLICY_URL =
  "https://www.termsfeed.com/live/a7a60427-d50b-4a68-9df3-cb0a8de42382";
const TERMS_URL =
  "https://www.termsfeed.com/live/e9153fae-bfb3-43c4-a87b-b7d6d20f7ec4";

export const metadata: Metadata = {
  title: "Ryan's Trivia — Support",
};

const FAQS = [
  {
    q: "When is the new question?",
    a: "A new question goes live every night at 8 PM Eastern Time. You have until 8 PM the next night to answer it.",
  },
  {
    q: "How do streaks and strikes work?",
    a: "Each correct answer adds one to your streak. A wrong answer or a timeout costs one of your three strikes, and the third strike ends your streak. Missing a day ends your streak too.",
  },
  {
    q: "How long do I have to answer?",
    a: "After tapping Ready To Play you get 5 seconds to read the question, then 8 seconds to pick an answer.",
  },
  {
    q: "I forgot my password.",
    a: "On the sign-in screen, tap Forgot password and we'll email you a reset link.",
  },
  {
    q: "I'm not getting notifications.",
    a: "Check that notifications are on in the app's Profile tab and in your phone's settings for Ryan's Trivia.",
  },
];

export default function SupportPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="w-full max-w-md py-16">
        <div className="flex items-center justify-center gap-[10px] mb-10">
          <Image src="/shamrock.png" alt="" width={36} height={36} />
          <h1
            className={`${bebasNeue.className} text-center`}
            style={{ fontSize: 36, color: COLORS.primary, lineHeight: 1 }}
          >
            Ryan&apos;s Trivia
          </h1>
          <Image src="/shamrock.png" alt="" width={36} height={36} />
        </div>

        <h2
          className="text-center text-2xl font-semibold mb-2"
          style={{ color: COLORS.text }}
        >
          Support
        </h2>
        <p
          className="text-center text-xl font-semibold italic mb-8"
          style={{ color: COLORS.gold }}
        >
          Questions? We&apos;ve got answers.
        </p>

        <div
          className="rounded-lg p-6 text-left"
          style={{ backgroundColor: COLORS.surface }}
        >
          <p style={{ color: COLORS.text }} className="leading-relaxed">
            Email us at{" "}
            <a
              href="mailto:support@ryanstrivianight.com"
              style={{ color: COLORS.primary }}
              className="font-medium underline"
            >
              support@ryanstrivianight.com
            </a>{" "}
            and we&apos;ll get back to you, usually within two days. Include
            your username so we can find your account.
          </p>

          <hr className="my-6" style={{ borderColor: "#2a2a4a" }} />

          <dl className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold" style={{ color: COLORS.gold }}>
                  {q}
                </dt>
                <dd className="mt-1 leading-relaxed" style={{ color: COLORS.text }}>
                  {a}
                </dd>
              </div>
            ))}
            <div>
              <dt className="font-semibold" style={{ color: COLORS.gold }}>
                How do I delete my account?
              </dt>
              <dd className="mt-1 leading-relaxed" style={{ color: COLORS.text }}>
                In the app, go to Profile and tap Delete Account. See{" "}
                <a
                  href="/delete-account"
                  style={{ color: COLORS.primary }}
                  className="font-medium underline"
                >
                  account deletion
                </a>{" "}
                for details.
              </dd>
            </div>
          </dl>

          <hr className="my-6" style={{ borderColor: "#2a2a4a" }} />

          <p style={{ color: COLORS.textMuted }}>
            <a
              href={PRIVACY_POLICY_URL}
              style={{ color: COLORS.primary }}
              className="font-medium underline"
            >
              Privacy Policy
            </a>
            {" · "}
            <a
              href={TERMS_URL}
              style={{ color: COLORS.primary }}
              className="font-medium underline"
            >
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
