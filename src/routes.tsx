import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

// Properly import the SignUpPage component
const SignUpPage = lazy(() =>
  import("./pages/SignUpPage").then((module) => ({
    default: module.SignUpPage,
  }))
);

export const routes = [
  {
    index: true,
    element: <Navigate to="/sign-up" replace />,
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpPage />
      </Suspense>
    ),
  },
];
