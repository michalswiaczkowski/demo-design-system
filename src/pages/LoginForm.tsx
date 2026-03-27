import React from "react";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface LoginFormProps {
  onSignUp?: () => void;
}

export default function LoginForm({ onSignUp }: LoginFormProps) {
  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <Card
        padding="md"
        elevated
        bordered
        title="Sign in"
        description="Enter your credentials"
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
        <Button variant="primary" size="md" label="Sign in" fullWidth />
        <Button variant="ghost" size="md" label="Forgot password?" fullWidth />
        <Button
          variant="ghost"
          size="md"
          label="Don't have an account? Sign up"
          fullWidth
          onClick={onSignUp}
        />
      </Card>
    </div>
  );
}
