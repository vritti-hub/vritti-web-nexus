import { Stack } from "@mui/material";

import { SignUpForm } from "./SignUpForm";
import { SignUpInfoPanel } from "./SignUpInfoPanel";

export const SignUp = () => {
  return (
    <Stack width="100%" direction="row">
      <SignUpInfoPanel />
      <SignUpForm />
    </Stack>
  );
};
