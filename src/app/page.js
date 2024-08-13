import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("@/Component/Home"));
const DynamicMain = dynamic(() => import("@/Component/Main"));
const DynamicHeader = dynamic(() => import("@/Component/Header"));


export default function Home() {

  return (
    <div>
      <DynamicHeader />
      <DynamicMain />
      <DynamicHome />
     
    </div>
  );
}
