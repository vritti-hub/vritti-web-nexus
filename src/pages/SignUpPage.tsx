import { Suspense, lazy } from "react";

// Using the proper exports from the features folder
const SignUp = lazy(() =>
  import("../features/signup").then((module) => ({
    default: module.SignUp,
  }))
);

export const SignUpPage = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SignUp />
    </Suspense>
  );
};
