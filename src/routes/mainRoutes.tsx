import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { SignUp } from "../pages/sign-up";

export const mainRoutes = [
  {
    index: true,
    element: <Navigate to="/sign-up" replace />,
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
];
