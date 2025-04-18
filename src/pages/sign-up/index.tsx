import { lazy } from "react";

export const SignUp = lazy(() =>
  import("./SignUp").then((module) => ({
    default: module.SignUp,
  }))
);
