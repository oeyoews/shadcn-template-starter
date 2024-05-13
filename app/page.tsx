'use client';

import { Sidebar } from './components/sidebar';
import { useEffect, useState } from 'react';
import { getBanners } from './api/banner';
import { loginAnonymous } from './api/login';
import Banners from '@/app/components/banner';
import { toast } from 'sonner';
import { getHotPlayList } from './api/song';
import Playlist from './components/playlist';
import Hitokoto from './components/hitokoto';

export default function Dashboard() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [hotPlayList, setHotPlayList] = useState<Playlist[]>([]);

  useEffect(() => {
    getHotPlayList().then(({ playlists }) => {
      setHotPlayList(playlists);
    });
  }, []);

  useEffect(() => {
    /** 获取轮播图 */
    getBanners()
      .then(({ banners }) => {
        setBanners(banners);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, []);

  /** 默认匿名登录 */
  useEffect(() => {
    if (localStorage.getItem('cookie')) return;
    loginAnonymous()
      .then((res) => {
        localStorage.setItem('cookie', res.cookie);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">今日推荐</h1>
          </div>

          <Banners data={banners} />
          <Playlist data={hotPlayList} title="" />
          <Hitokoto />
        </main>
      </div>
    </div>
  );
}
