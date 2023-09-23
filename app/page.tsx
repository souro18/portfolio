import Image from 'next/image'

// https://www.inbalochyon.com/

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className='flex w-full justify-between'>
          <div>
            <h1 className='text-4xl mb-2 '>Soumalina Majumdar</h1>
            <h4 className='text-lg'>Concept art | Animation | Illustration</h4>
          </div>
          <Image src="./next.svg" alt="illustration" width={100} height="100" />
        </div>
  
      </div>
      <div className='h-48 bg-white'>random section</div>
    </main>
  )
}
