import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <div className="text-center">
          <p className="text-white text-lg">A simple authentication service</p>
          <Button
            variant="link"
            size="sm"
            asChild
            className="px-0 text-gray-50 text-base"
          >
            <Link
              href="https://github.com/Lautaro-Aguilar/next-auth-v5"
              target="_blank"
              rel="noreferrer noopener"
            >
              by Lautaro Aguilar with ❤️
            </Link>
          </Button>
        </div>

        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
