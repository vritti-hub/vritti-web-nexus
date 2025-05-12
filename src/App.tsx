import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const App = () => {
  useEffect(() => {
    // Set margin to 0px on the body tag when the component mounts
    document.body.style.margin = "0px";
  }, []);
  const app = useRoutes(routes);
  return <>{app}</>;
};
