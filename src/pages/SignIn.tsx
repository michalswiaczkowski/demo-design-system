import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface SignInProps {
  onSignUp?: () => void;
}

export default function SignIn({ onSignUp }: SignInProps) {
  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <Card
        padding="md"
        elevated
        bordered
        title="Sign in"
        description="Enter your credentials"
        fields={
          <>
            <Input label="Email" state="default" />
            <Input label="Password" state="default" type="password" />
          </>
        }
        actions={
          <>
            <Button variant="ghost" size="md" label="Forgot password?" fullWidth />
            <Button variant="primary" size="md" label="Sign in" fullWidth />
            <Button
              variant="ghost"
              size="md"
              label="Don't have an account?"
              fullWidth
              onClick={onSignUp}
            />
          </>
        }
      />
    </div>
  );
}
