import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface SignUpProps {
  onSignIn?: () => void;
}

export default function SignUp({ onSignIn }: SignUpProps) {
  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <Card
        padding="md"
        elevated
        bordered
        title="Sign up"
        description="Create an account"
        fields={
          <>
            <Input label="Email" state="default" />
            <Input label="Password" state="default" type="password" />
            <Input label="Confirm password" state="default" type="password" />
          </>
        }
        actions={
          <>
            <Button variant="primary" size="md" label="Sign up" fullWidth />
            <Button
              variant="ghost"
              size="md"
              label="Already have an account?"
              fullWidth
              onClick={onSignIn}
            />
          </>
        }
      />
    </div>
  );
}
