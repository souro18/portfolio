import Image from "next/image";

// https://www.inbalochyon.com/

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center mx-auto max-w-5xl overflow-x-hidden">
        <div className="flex w-full h-[100%] justify-between items-center">
          <div>
            <h1 className="text-4xl mb-2 ">Soumalina Majumdar</h1>
            <h4 className="text-lg">Concept art | Animation | Illustration</h4>
          </div>
          {/* 1680 / 1050 */}
          <Image
            src="/Illustration.png"
            alt="illustration"
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="h-48 bg-white">random section</div>
    </main>
  );
}
