'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { getVideos, getWatchedVideos, markVideoWatched } from '../../lib/appwrite'
import { Play } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

const Videos = () => {
  const [videos, setVideos] = useState<any[]>([])
  const [watchedIds, setWatchedIds] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return

      try {
        const allVideos = await getVideos()
        const watched = await getWatchedVideos(user.id)
        setVideos(allVideos)
        setWatchedIds(watched)
      } catch (err) {
        setError('Failed to load videos')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user])

  const handleWatch = async (videoId: string) => {
    if (!user) return
    try {
      await markVideoWatched(user.id, videoId)
      router.push(`/video/${videoId}`)
      router.refresh() // 👈 forces a hard revalidation coz safari cache sucks

    } catch (err) {
      console.error('Failed to mark as watched', err)
    }
  }

  if (loading) return <div>Loading videos...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videos.map((video) => {
        const isWatched = watchedIds.includes(video.$id)

        return (
          <Card
            key={video.$id}
            className="p-0 overflow-hidden flex flex-col justify-end relative h-80 shadow-lg"
          >
            <img
              src={video.fileThumb || '/1.jpg'}
              alt={video.title}
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            {isWatched && (
              <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">
                Watched
              </div>
            )}
            <div className="relative z-10 mt-auto bg-white/40 dark:bg-black/40 backdrop-blur text-white p-4 rounded-t-xl flex flex-col items-start">
              <h3 className="font-semibold text-lg mb-2 text-black dark:text-white flex items-center gap-2">
                {video.title}
              </h3>
              <div className="flex flex-wrap justify-start gap-2 mb-4 items-start w-full">
                {(video.tags || []).map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-blue-200/60 text-blue-900 dark:bg-blue-900/60 dark:text-blue-100 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="default"
                  onClick={() => handleWatch(video.$id)}
                  className="bg-blue-600 dark:bg-white text-white dark:text-blue-700 hover:bg-blue-400 dark:hover:bg-blue-900 dark:hover:text-white"
                >
                  <Play className="mr-1" />
                  Watch Now
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default Videos
