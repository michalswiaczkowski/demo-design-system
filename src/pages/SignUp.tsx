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
        description="Create an account to continue"
      >
        <Input
          label="Email"
          placeholder="Enter your email"
          required
          state="default"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          required
          state="default"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Enter your password"
          required
          state="default"
          type="password"
        />
        <Button variant="primary" size="md" label="Sign up" fullWidth />
        <Button
          variant="ghost"
          size="md"
          label="Already have an account? Sign in"
          fullWidth
          onClick={onSignIn}
        />
      </Card>
    </div>
  );
}
