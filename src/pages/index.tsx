import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hook from "~/components/hook.comp";
import HookHeader from "~/components/hook_header.comp";
import NavBar from "~/components/navbar.comp";
import StoryBanner from "~/components/story_banner.comp";
import ActionsGroup from "~/components/actions_group.comp";

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
          <div className="relative h-screen w-screen">
            <HookHeader />
            <Hook />
          </div>
          <div className="h-[425px]" />
          <StoryBanner />
          <div className="h-[295px]" />
          <ActionsGroup />

          <div className="h-[1000px] w-screen"></div>
          <NavBar />
        </div>
      </main>
    </>
  );
};

export default Home;
