"use client";
import * as React from "react";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { airMax } from "./datapages/detail";


export function CarouselSize() {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        {/* Section Title */}
        <h1 className="font-bold text-[22px]">Best of Air Max</h1>

        {/* Link to All Products */}
        <Link href="/allproducts">
          <button className="px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800">
            View All Products
          </button>
        </Link>
      </div>

      {/* Carousel Section */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {airMax.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/products/${item.id}`}> 
                <div className="p-1">
                  <Card>
                    <CardContent className="bg-[#F5F5F5] aspect-square group">
                      <Image src={item.img} alt={"shoes"} width={440} height={440} />
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between mx-2 mt-2">
                  <h1 className="font-semibold text-sm">{item.title}</h1>
                  <h2 className="font-semibold text-sm">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm">{item.title2}</h3>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
