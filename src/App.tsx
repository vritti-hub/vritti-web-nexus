import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoutes";

export const App = () => {
  useEffect(() => {
    // Set margin to 0px on the body tag when the component mounts
    document.body.style.margin = "0px";
  }, []);
  const app = useRoutes(mainRoutes);
  return <>{app}</>;
};
