import React from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default'
import { getVideos } from '@/lib/appwrite'

interface VideoShowcaseProps {
  params: { id: string }
}

const VideoPage = async ({ params }: VideoShowcaseProps) => {
  const allVideos = await getVideos()
  const video = await allVideos.find((v: any) => v.$id === params.id)

  if (!video) {
    return <div className="max-w-2xl mx-auto p-8 text-red-500 text-xl">Video not found.</div>
  }

  return (
<>
<MediaPlayer
        title={video.title}
        src={video.file || 'https://files.vidstack.io/sprite-fight/720p.mp4'}
        className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails={video.thumbnailsUrl || 'https://files.vidstack.io/sprite-fight/thumbnails.vtt'}
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description || 'No description provided.'}</p>

      <MediaPlayer
        title={video.title}
        src={video.file || 'https://files.vidstack.io/sprite-fight/720p.mp4'}
        className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails={video.thumbnailsUrl || 'https://files.vidstack.io/sprite-fight/thumbnails.vtt'}
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
</>
  )
}

export default VideoPage
