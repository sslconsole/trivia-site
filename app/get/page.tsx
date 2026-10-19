import type { Metadata } from "next";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const APP_STORE_URL = 'https://apps.apple.com/app/id6811342943';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ryan.triviaapp';

export const dynamic = 'force-dynamic';

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

export default function GetPage() {
  const ua = headers().get("user-agent") ?? "";

  if (/iPhone|iPad|iPod/i.test(ua)) {
    redirect(APP_STORE_URL);
  }
  if (/Android/i.test(ua)) {
    redirect(PLAY_STORE_URL);
  }

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
          Get the App
        </h2>
        <p
          className="text-center text-xl font-semibold italic mb-8"
          style={{ color: COLORS.gold }}
        >
          One new trivia question. Every day.
        </p>

        <div
          className="rounded-lg p-6 text-left space-y-4"
          style={{ backgroundColor: COLORS.surface }}
        >
          <a
            href={APP_STORE_URL}
            className="block w-full rounded-lg py-3 font-semibold text-center"
            style={{ backgroundColor: COLORS.primary, color: COLORS.background }}
          >
            Download on the App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            className="block w-full rounded-lg py-3 font-semibold text-center"
            style={{ backgroundColor: COLORS.primary, color: COLORS.background }}
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </main>
  );
}
