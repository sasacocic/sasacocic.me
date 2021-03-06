import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sasa Cocic</h1>
        <ul>
          <li>writings</li>
          <li>music</li>
          <li>photography</li>
          <li>
            <Link href="/things-i-want">
              <a>things I want</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
