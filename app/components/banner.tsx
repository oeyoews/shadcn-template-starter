import Image from 'next/image';

import { CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Banner({ data }: { data: Banner[] }) {
  return (
    <div className="flex justify-center items-center gap-3 p-2">
      <Carousel className="w-5/6">
        <CarouselContent className="">
          {data.map((banner) => (
            <CarouselItem
              key={banner.imageUrl}
              className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <CardContent className="flex aspect-video justify-center items-center p-2">
                  <Image
                    src={banner.imageUrl}
                    alt={banner.typeTitle}
                    title={banner.typeTitle}
                    priority={true}
                    width={1080}
                    className="hover:cursor-pointer rounded w-full hover:scale-105 transition-all duration-500 shadow"
                    height={480}
                  />
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
