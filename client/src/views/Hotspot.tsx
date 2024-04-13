import AppLayout from "components/AppLayout";

const Content = () => {
  return <div className="w-full h-full bg-gray-100 rounded-sm">hotspot</div>;
};

const Hotspot = () => {
  return <AppLayout content={<Content />} />;
};

export default Hotspot;
