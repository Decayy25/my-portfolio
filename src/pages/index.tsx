import { Fragment } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/templates/Header";
import PageHead from "@/components/commons/PageHead/PageHead";
import Hero from "@/components/templates/Hero"
import About from "@/components/templates/About";
import Portfolio from "@/components/templates/Portfolio";
import Clients from "@/components/templates/clients";
import Blog from "@/components/templates/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <PageHead title="Moch. Rizqi Hermawan | Web Developer" />
      <Header />
      <main
        className={inter.className}
      >
        <Hero />
        <About />
        <Portfolio />
        <Clients />
        <Blog />
      </main>
    </Fragment>
  );
}
