import MoblileNav from "@/components/MoblileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Abdus', lastName: 'Salam' }

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />

        <div className="flex felx-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
<div>
  <MoblileNav user={loggedIn} />
</div>
          </div>
        </div>
        {children}
    </main>
    );
}
