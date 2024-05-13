'use client';

import { Sidebar } from './components/sidebar';
import { useEffect, useState } from 'react';
import { getBanners } from './api/banner';
import Banners from './components/banner';

export default function Dashboard() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    getBanners().then(({ banners }) => {
      setBanners(banners);
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
          {/* <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"></div> */}
        </main>
      </div>
    </div>
  );
}
