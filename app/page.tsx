import { getProducts } from "./utils"
import Image from "next/image"
import { ThumbsUp } from 'lucide-react';

export default async function Home() {

  const data = await getProducts()


  return (
    <section className="p-4 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {data.map(item => (
        <article className="flex flex-col justify-center items-center gap-2 p-2 rounded-md bg-slate-800" key={item.id} >
          <h3 className="text-2xl font-bold">Escuela Nº {item.cartNumber}</h3>
          <h4 className="text-xl">{item.school}</h4>
          <Image className="object-cover w-[250px] h-[250px]" src={item.image} width={250} height={250} alt={item.school} />
          <p className="flex gap-2 text-xl">{<ThumbsUp />} {item.likes}</p>
        </article>
      ))
      }
    </section>

  )
}
