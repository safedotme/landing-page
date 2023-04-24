import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hook from "~/components/Hook";
import HookHeader from "~/components/HookHeader";
import NavBar from "~/components/NavBar";
import StoryBanner from "~/components/StoryBanner";
import ActionsGroup from "~/components/ActionsGroup";
import LearnMoreButton from "~/components/LearnMoreButton";
import Footer from "~/components/Footer";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="relative h-screen">
          <div className="relative h-screen w-screen">
            <HookHeader />
            <Hook />
          </div>
          <div className="sm:h-[350px] md:h-[425px]" />
          <StoryBanner />
          <div className="sm:h-[220px] md:h-[295px]" />
          <ActionsGroup />
          <div className="h-[65px]" />
          <LearnMoreButton />
          <div className="sm:h-[150px] md:h-[240px]" />
          <div className="mb-[70px] h-[1.5px] bg-white opacity-[0.1]" />
          <Footer />
          <div className="sm:h-[75px] lg:h-0" />
          <NavBar />
        </div>
      </main>
    </>
  );
};

export default Home;
