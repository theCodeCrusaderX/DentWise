import { SignedIn,SignedOut,SignUpButton,SignOutButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <SignOutButton>LogOut</SignOutButton>
      </SignedIn>
      <SignedOut > 
        <SignInButton>SignIn</SignInButton>
      </SignedOut>
    </>
    
  );
}
