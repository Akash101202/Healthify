import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b text-rose-400">
      <div className="flex gap-6">
        <a href="#" className="text-sm font-medium">
          Home
        </a>
      </div>
      <h1 className="text-xl font-bold">Healthify🩺</h1>
      <button className="px-4 py-2 font-medium">
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </button>
    </nav>
  );
}

export default Navbar;
