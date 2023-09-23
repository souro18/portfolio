import Image from "next/image";

// https://www.inbalochyon.com/

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center m-auto max-w-5xl">
        <div className="flex w-full justify-between">
          <div>
            <h1 className="text-4xl mb-2 ">Soumalina Majumdar</h1>
            <h4 className="text-lg">Concept art | Animation | Illustration</h4>
          </div>
          <Image
            src="https://media.tenor.com/J-zhNFrEO0kAAAAC/warioware-bye-bye.gif"
            alt="illustration"
            width={200}
            height="200"
          />
        </div>
      </div>
      <div className="h-48 bg-white">random section</div>
    </main>
  );
}
