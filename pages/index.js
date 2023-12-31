import Head from "next/head";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME | 507 creatives</title>
        <meta name="description" content="Hi! Work in progress." key="desc" />
        <meta property="og:title" content="HOME | 507 creatives" />
        <meta property="og:description" content="Hi! Work in progress." />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="507 CREATIVES" />
        <meta name="twitter:title" content="Home | 507 CREATIVES" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
      <main className="flex flex-col justify-center w-[100vw] h-[100vh]">
        <div className="flex flex-col items-center gap-[20px] px-[60px] text-center">
          <video className="video pt-[300px]" autoPlay loop muted playsInline>
            <source
              src="/507creatives.mov"
              type='video/mp4; codecs="hvc1"'
            ></source>
            <source src="/507creatives.webm" type="video/webm"></source>
          </video>
          <h1 className="text-white text-[48px] font-bold uppercase max-[500px]:text-[40px]">
            Hi! Work in progress.
          </h1>
          <h2 className="text-white">
            <p className="uppercase">Contact us!</p>
            <p>mamsprawe@507.com.pl</p>
          </h2>
          <Partners />
        </div>
      </main>
    </>
  );
}
