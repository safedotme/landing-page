import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
      <main className="bg-grey-900">
        <div className="relative h-screen">
          <Header />
          <NavBar />
        </div>
      </main>
    </>
  );
};

export default Home;
