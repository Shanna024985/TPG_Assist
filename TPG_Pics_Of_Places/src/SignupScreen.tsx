import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { SignupForm } from "@/components/signup-form";

type Props = {};

const SignupScreen = (props: Props) => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10">
        <div className="flex w-200 max-w-sm flex-col gap-6">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
