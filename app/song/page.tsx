'use client';

import { useSearchParams } from 'next/navigation';
import Player from '../components/Player';

export default function SongPage() {
  const params = useSearchParams();
  const id = params.get('id');

  return <></>;
}
