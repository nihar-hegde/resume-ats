import { SignUpForm } from "@/components/Auth/sign-up-form";
import React from "react";

const SignUp = () => {
  return (
    <main className="flex items-center justify-center p-20">
      <div>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
