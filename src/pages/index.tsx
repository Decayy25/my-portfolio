import { Fragment } from "react";
import { Inter } from "next/font/google";
import PageHead from "@/components/commons/PageHead";
import Hero from "@/components/organisms/Hero"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <PageHead title="Moch. Rizqi Hermawan | Web Developer" />
      <main
        className={inter.className}
      >
        <Hero />
      </main>
    </Fragment>
  );
}
