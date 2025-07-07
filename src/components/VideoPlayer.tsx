'use client';

import {
  MediaPlayer,
  MediaProvider
} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout
} from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

interface VideoPlayerProps {
  src: string;
  title: string;
  thumbnails?: string;
}

export default function VideoPlayer({ src, title, thumbnails }: VideoPlayerProps) {
  return (
    <MediaPlayer
      title={title}
      src={src}
      className="w-full aspect-video mb-10 rounded-lg overflow-hidden shadow-lg"
      crossorigin
      controls
      playsinline
    >
      <MediaProvider />
      <DefaultVideoLayout
        thumbnails={thumbnails}
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
