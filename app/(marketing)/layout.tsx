import { Metadata } from "next";

import Navbar from "@/app/(marketing)/components/Navbar";

export const metadata: Metadata = {
  title: "GenQ | Home page",
  description: "Learn, Practice and master new languages with GenQ.",
};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col flex-1 bg-gradient-to-r from-darkblue to-skyblue items-center justify-center">
        {children}
      </section>
      {/* <Footer /> */}
    </main>
  );
};
export default MarketingLayout;
