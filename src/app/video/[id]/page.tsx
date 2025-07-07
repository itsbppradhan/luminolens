// app/videos/[id]/page.tsx

import VideoPlayer from '@/components/VideoPlayer';
import { getVideos } from '@/lib/appwrite';

interface VideoShowcaseProps {
  params: { id: string };
}

export default async function VideoPage({ params }: VideoShowcaseProps) {
  const allVideos = await getVideos();
  const video = allVideos.find((v: any) => v.$id === params.id);

  if (!video) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-red-500 text-xl">
        Video not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {video.description || 'No description provided.'}
      </p>

      <VideoPlayer
        src={video.file || 'https://files.vidstack.io/sprite-fight/720p.mp4'}
        title={video.title}
        thumbnails={video.thumbnailsUrl || 'https://files.vidstack.io/sprite-fight/thumbnails.vtt'}
      />
    </div>
  );
}
