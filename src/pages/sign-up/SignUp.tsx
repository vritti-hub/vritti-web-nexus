import { Stack } from "@mui/material";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpInfoPanel } from "./components/SignUpInfoPanel/SignUpInfoPanel";

export const SignUp = () => {
  return (
    <Stack width="100%" direction="row">
      <SignUpInfoPanel />
      <SignUpForm />
    </Stack>
  );
};
