// import { getPlayListComment, getPlayListDetail } from '~lib/api/playlist';
import Link from 'next/link';
import Image from 'next/image';
import { getPlayListComment, getPlayListDetail } from '@/app/api/playlist';

export default async function Page({ params }: any) {
  const { slug } = params;
  const musicdata = await getPlayListDetail(slug);
  const { name, description, tags, coverImgUrl, createTime, updateTime } =
    musicdata.playlist;
  const songs = musicdata.playlist.tracks;
  const privileges = musicdata.privileges;
  const vipids = privileges
    .filter((privileges: any) => privileges.fee === 1)
    .map((vipPrivileges: any) => vipPrivileges.id);

  const getTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString().split('T')[0];
  };
  const playListComment = await getPlayListComment(slug);

  return (
    <div className="my-2">
      <h1 className="text-center">{name}</h1>
      <div className="flex justify-center items-center">
        <Image
          src={coverImgUrl}
          width={256}
          height={256}
          alt="img"
          className="rounded-full shadow-lg"
        />
      </div>
      <p className="line-clamp-2">{description}</p>
      <div className="my-2 flex items-center space-x-2">
        <div>创建时间: {getTime(createTime)}</div>
        <div>更新时间: {getTime(updateTime)}</div>
      </div>
      <hr />
      <ol className="columns-1 md:columns-2">
        {songs.map(({ id, name }) => (
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
