import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-start justify-between ">
      <h1 className="text-2xl font-semibold">Drizzle Test</h1>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Header;
