import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

export const LandingPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-extrabold ">Hello, Welcome to resumeAI</h1>
        <Link href={"/sign-up"} className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </main>
  );
};
