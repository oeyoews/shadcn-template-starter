'use client';

import Link from 'next/link';
import { getHitokoto } from '../api/hitokoto';
import { useEffect, useId, useState } from 'react';

/** 需要用户登录, 如果匿名登录数据为空 */
export default function Hitokoto({ number = 6 }: { number?: number }) {
  const [startPickData, setStartPickData] = useState<IStarPick['data']>();
  const toastMessage = startPickData?.pageConfig.nodataToast;

  useEffect(() => {
    getHitokoto('').then(({ data }) => {
      setStartPickData(data);
    });
  }, []);

  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold md:text-2xl">云村星评</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {startPickData?.blocks[0].creatives // .filter((b) => b.creatives?.length > 0)[0]
          ?.slice(0, number)
          .map((creative) => {
            const resources = creative.resources[0];
            const resInfo = resources.resourceExtInfo;
            const uid = resInfo?.users[0]?.userId;
            return (
              <Link
                href={`/song?id=${resInfo?.songData.id}`}
                key="99"
                title={resInfo?.songData.name}
                className="hover:scale-105 transition-all duration-500">
                <div className="w-full h-full m-2 flex justify-between p-2 flex-wrap bg-neutral-100 rounded-md shadow">
                  <div className="w-full md:w-auto">
                    <div className="line-clamp-3">
                      {resources.uiElement.mainTitle.titleDesc} --
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 w-full justify-end">
                    <div>{resInfo?.users[0].nickname}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <p className="text-center">{toastMessage}</p>
    </div>
  );
}
