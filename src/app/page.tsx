import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen gb-white flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
    </div>
  );
}
