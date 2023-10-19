import Partners from "@/components/partners";
export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] grid place-items-center">
      <div className="flex flex-col items-center">
        <video className="video" autoPlay loop muted>
          <source
            src="/507creatives.mov"
            type='video/mp4; codecs="hvc1"'
          ></source>
          <source src="/507creatives.webm" type="video/webm"></source>
        </video>
        <h1 className="text-white text-[48px] font-bold uppercase">
          Hi! Work in progress.
        </h1>
        <h2 className="text-white">
          <span className="uppercase">Contact us!</span> mamsprawe@507.com.pl
        </h2>
      </div>
      <Partners />
    </main>
  );
}
