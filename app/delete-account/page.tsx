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

export const metadata: Metadata = {
  title: "Ryan's Trivia",
};

export default function DeleteAccountPage() {
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
          Delete Your Account
        </h2>
        <p
          className="text-center text-xl font-semibold italic mb-8"
          style={{ color: COLORS.gold }}
        >
          We&apos;d hate to lose you, trivia friend.
        </p>

        <div
          className="rounded-lg p-6 text-left"
          style={{ backgroundColor: COLORS.surface }}
        >
          <p style={{ color: COLORS.text }} className="leading-relaxed">
            To permanently delete your account and all associated data —
            including your streak, leaderboard history, and strike record —
            follow these steps:
          </p>

          <ol className="mt-5 space-y-3">
            {[
              "Open Ryan's Trivia on your device",
              "Tap the Profile tab at the bottom of the screen",
              "Scroll down and tap Delete Account",
              "Confirm by tapping Delete My Account",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex-none w-6 h-6 rounded-full font-bold text-sm flex items-center justify-center"
                  style={{ backgroundColor: COLORS.gold, color: "#000000" }}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5" style={{ color: COLORS.text }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 font-semibold" style={{ color: COLORS.text }}>
            Your account will be deleted immediately and cannot be recovered.
          </p>

          <hr className="my-6" style={{ borderColor: "#2a2a4a" }} />

          <p style={{ color: COLORS.textMuted }}>
            Need help or can&apos;t access the app? Email us at{" "}
            <a
              href="mailto:ryanstrivianight@gmail.com"
              style={{ color: COLORS.primary }}
              className="font-medium underline"
            >
              ryanstrivianight@gmail.com
            </a>{" "}
            and we&apos;ll delete your account manually within 7 days.
          </p>
        </div>
      </div>
    </main>
  );
}
