'use client';

import { useEffect, useState } from 'react';
import { getBanners } from './api/banner';
import { loginAnonymous } from './api/login';
import Banners from '@/app/components/banner';
import { toast } from 'sonner';
import { getHotPlayList } from './api/song';
import Playlist from './components/playlist';
import Hitokoto from './components/hitokoto';
import Link from 'next/link';
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Dashboard() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [hotPlayList, setHotPlayList] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHotPlayList().then(({ playlists }) => {
      setHotPlayList(playlists);
    });

    // 获取轮播图
    getBanners()
      .then(({ banners }) => {
        setBanners(banners);
      })
      .catch((e) => {
        toast.error(e.message);
      });
    setIsLoading(false);
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

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <main className="flex flex-col gap-4 lg:gap-6 lg:p-6 fixed bottom-0 top-14 overflow-y-auto">
        <div
          className="flex flex-1 rounded-lg shadow-sm"
          x-chunk="dashboard-02-chunk-1">
          <Banners data={banners} />
        </div>
        <div
          className="flex flex-1 rounded-lg shadow-sm p-4"
          x-chunk="dashboard-02-chunk-1">
          <Playlist data={hotPlayList} title="热门歌单" />
        </div>
      </main>
    </>
  );
}
