import Head from "next/head";
import Demo2 from "../src/components/Demo2";

const Home = () => {
  return (
    <>
      <Head>
        <title>React Semantic Elements</title>
        <meta
          name="description"
          content="HTML semantic sectioning elements for React"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Demo2 />
    </>
  );
};

export default Home;
