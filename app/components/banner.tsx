import Image from 'next/image';

export default function Banners({ data }: { data: Banner[] }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
        {data.slice(0, 18).map((banner) => (
          <div key={banner.imageUrl} className="overflow-hidden rounded-md">
            <Image
              src={banner.imageUrl}
              alt={banner.typeTitle}
              title={banner.typeTitle}
              priority={true}
              width={1080}
              className="hover:cursor-pointer rounded w-full hover:scale-105 transition-all duration-500 shadow"
              height={480}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
