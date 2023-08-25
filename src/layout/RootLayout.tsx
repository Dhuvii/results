import { Outlet } from "react-router-dom";
import AlertContainer from "../components/alerts/AlertContainer";

const RootLayout = () => {
  return (
    <main className="dark-theme">
      <div className="relative z-[9999999999999999999]">
        <AlertContainer />
      </div>
      <Outlet />
    </main>
  );
};

export default RootLayout;
