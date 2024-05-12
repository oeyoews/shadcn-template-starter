'use client';

import { Sidebar } from './components/sidebar';
import service from '@/lib/request';
import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    service({
      url: '/banner',
      method: 'get',
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">待定标题</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1">
            待完成
          </div>
        </main>
      </div>
    </div>
  );
}
