import React, { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

type Page = "signin" | "signup";

export default function App() {
  const [page, setPage] = useState<Page>("signin");

  return page === "signin"
    ? <SignIn onSignUp={() => setPage("signup")} />
    : <SignUp onSignIn={() => setPage("signin")} />;
}
