import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/cards"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"
import { gear2 } from "./datapages/detail"


export function GearCarousel2() {
  return (
    
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    ><Link href={"/Womans"}>
       <h1 className="ml-[12cm] "> Shop Womens</h1></Link>
      <CarouselContent>
        {gear2.map((item) => (
          
          <CarouselItem key={item.id} className=" lg:basis-1/2">
            <Link href={`/products/${item.id}`}>

            <div className="p-1">
              <Card>
                <CardContent className=" bg-[#F5F5F5] aspect-square group ">
                 <Image src={item.img} alt={"shoes"} width={440} height={440}/>
                </CardContent>
                
              </Card>
            </div>
                <div className=" flex justify-between mx-2 mt-2">
                  <h1 className="font-semibold text-sm">{item.title}</h1>
                    <h2 className="font-semibold text-sm">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm">{item.title2}</h3>
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute bottom-[390px]  md:bottom-[430px] md:right-14 right-14  lg:bottom-[310px] xl:bottom-[380px]">
      <CarouselPrevious />
      <CarouselNext />
      </div>
   
    </Carousel>
  )
}