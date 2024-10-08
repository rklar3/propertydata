"use client";

import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
// import { useSigninModal } from "@/hooks/use-signin-modal";

export function GetStartedButton() {
  // const signInModal = useSigninModal();
  // const { data: session } = useSession();
  const router = useRouter();

  const handleClick = () => {
    // if (!session) {
    //   signInModal.onOpen();
    //   return;
    // }
    // router.push("/dashboard");
  };

  return (
    <Button
      className={cn(
        // buttonVariants({ size: "lg" }),
        "translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white opacity-100 ease-in-out [--animation-delay:600ms] dark:text-black"
      )}
      onClick={handleClick}
    >
      <span>Start here now</span>
      <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </Button>
  );
}
