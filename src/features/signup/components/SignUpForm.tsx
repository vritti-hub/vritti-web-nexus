import { Stack } from "@mui/material";
import { Colors } from "../../../theme/Colors";
import { SignUpFormProps } from "../types";

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  return (
    <Stack
      width="100%"
      height="100vh"
      sx={{
        background: Colors.greys.carbonBlack,
        padding: "2rem",
      }}
    ></Stack>
  );
};
