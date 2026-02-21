import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center py-4">
      <Image src="/mitizure.svg" alt="mitizure" width={360} height={120} />
      <div>
        <p className="font-google-sans text-4xl font-bold text-slate-800">compl.exe</p>
      </div>
    </header>
  );
}
