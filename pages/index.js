import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        {/*粗体和大文本*/}
      <h1 className="text-3xl font-bold">hello,world</h1>
    </div>
  )
};
