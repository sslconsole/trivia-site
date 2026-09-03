import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Ryan's Trivia",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#0f0f2e] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <span className="text-6xl mb-4" role="img" aria-label="Shamrock">
          🍀
        </span>

        <h1
          className={`${bebasNeue.variable} font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl tracking-wide text-[#F5A623]`}
        >
          Delete Your Account
        </h1>

        <p className="mt-3 text-white/70 italic">
          We&apos;d hate to lose you, trivia friend.
        </p>

        <div className="mt-8 w-full rounded-2xl bg-[#1a1a3d] border border-[#F5A623]/20 shadow-lg shadow-black/30 p-6 sm:p-8 text-left">
          <p className="text-white/90 leading-relaxed">
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
              <li key={i} className="flex gap-3 text-white/90">
                <span className="flex-none w-6 h-6 rounded-full bg-[#F5A623] text-[#0f0f2e] font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-white/90 font-semibold">
            Your account will be deleted immediately and cannot be recovered.
          </p>

          <hr className="my-6 border-white/10" />

          <p className="text-white/70">
            Need help or can&apos;t access the app? Email us at{" "}
            <a
              href="mailto:ryanstrivianight@gmail.com"
              className="text-[#F5A623] font-medium underline underline-offset-2 hover:text-[#F5A623]/80"
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
