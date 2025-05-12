import { Stack } from "@mui/material";
import { Colors } from "../../../theme/Colors";

export const SignUpInfoPanel = ({}) => {
  return (
    <Stack
      width="100%"
      height="100vh"
      sx={{
        background: `linear-gradient(180deg, ${Colors.greys.jetBlack} 0%, ${Colors.semantics.blue[900]} 50%, ${Colors.semantics.blue[700]} 100%)`,
        padding: "2rem",
        color: Colors.greys.snowWhite,
        justifyContent: "center",
      }}
    >
      {/* <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography> */}
    </Stack>
  );
};
