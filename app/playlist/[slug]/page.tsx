'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getPlayListDetail } from '@/app/api/playlist';
import { useEffect, useState } from 'react';

export default function Page({ params }: any) {
  const { slug } = params;
  const [isLoading, setIsLoading] = useState(true);

  const [musicdata, setMusicData] = useState<IPlayListDetails['playlist']>(
    {} as any
  );

  useEffect(() => {
    getPlayListDetail(slug).then((data) => {
      setMusicData(data.playlist);
      setIsLoading(false);
    });
  }, []);

  const getTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString().split('T')[0];
  };

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div className="my-2">
      <h1 className="text-center">{musicdata?.name}</h1>
      <div className="flex justify-center items-center">
        <Image
          src={musicdata?.coverImgUrl!}
          width={256}
          height={256}
          alt="img"
          className="rounded-full shadow-lg"
        />
      </div>
      <p className="line-clamp-2">{musicdata.description}</p>
      <div className="my-2 flex items-center space-x-2">
        <div>创建时间: {getTime(musicdata.createTime)}</div>
        <div>更新时间: {getTime(musicdata.updateTime)}</div>
      </div>
      <hr />
      <ol className="columns-1 md:columns-2">
        {musicdata?.tracks?.map(({ id, name }) => (
          <li key={id} className="mt-0">
            <Link href={`/song?id=${id}`} className="no-underline">
              {name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
