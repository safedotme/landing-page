import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import BubbleAnimation from "~/components/bubbles.comp";
import Header from "~/components/header.comp";
import NavBar from "~/components/navbar.comp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe</title>
        <meta
          name="description"
          content="A violence encounter tool in your pocket."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative h-screen">
          <BubbleAnimation />
          <Header />
          <NavBar />
        </div>
      </main>
    </>
  );
};

export default Home;
