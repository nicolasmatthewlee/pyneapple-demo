import { ReactNode } from "react";
import Navigation from "./navigation/Navigation";

const AppLayout = ({ content }: { content?: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="p-[15px] h-full w-full">{content}</div>
    </div>
  );
};

export default AppLayout;
