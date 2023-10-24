'use client'

import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import useOnPlay from "@/hooks/useOnPlay"
import { useUser } from "@/hooks/useUser"
import { Song } from "@/types"
import { useRouter } from "next/navigation"

import { CiClock2 } from "react-icons/ci"
import { BsFillPlayFill } from 'react-icons/bs'

import { useEffect } from 'react'

import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')



interface LikedContentProps {
    songs_Liked: Song[]

}

const LikedContent: React.FC<LikedContentProps> = ({
    songs_Liked,
}) => {

    //console.log(songs_Liked);

    const router = useRouter()
    const { isLoading, user } = useUser()
    const onplay = useOnPlay(songs_Liked)

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/')
        }

    }, [isLoading, user, router])

    if (songs_Liked.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No liked songs.
            </div>
        )
    }

    function timeLiked(song_created_at: any) {
        dayjs.extend(relativeTime)

        const date1 = dayjs(song_created_at)
        //@ts-ignore
        const dateFromNow = date1.fromNow()

        return dateFromNow
    }

    return (
        <div className="flex flex-col gap-y-2 sm:p-6 text-xs sm:text-base">
            <div className="grid grid-cols-12  border border-t-0  border-x-0 border-neutral-700 py-1 sm:p-2 text-neutral-400 items-center text-xs sm:text-base">
                <p className="col-start-1 col-end-1 place-self-center ">#

                </p>
                <p className="col-start-2 col-end-8 lg:col-start-2 lg:col-end-9">Title</p>
                <p className="col-start-9 col-end-12 lg:col-start-10 lg:col-end-11">Date added</p>
                <CiClock2
                    className="col-start-12 col-end-12 place-self-center"
                    size={20} />
            </div>


            {songs_Liked.map((song: any, i: number) => (
                <div
                    //@ts-ignore
                    // onClick={urlSong(i + 1)}
                    key={
                        //@ts-ignore
                        song.id
                    }
                    className="grid grid-cols-12  hover:bg-neutral-800/50  rounded-md items-center relative group"
                >
                    <div className="absolute left-2 sm:left-4 lg:left-6 xl:left-8">
                        <BsFillPlayFill className="transition opacity-0 items-center translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0" size={20} />
                    </div>
                    <p className="transition opacity-100 translate translate-y-1/4 group-hover:opacity-0 group-hover:translate-y-0 col-start-1 col-end-1 place-self-center text-neutral-400">{i + 1}</p>

                    <div className="flex flex-1 items-center col-start-2 col-end-8 lg:col-start-2 lg:col-end-9">

                        <MediaItem
                            className="hover:bg-neutral-800/0"
                            onClick={(id) => onplay(id)}
                            //@ts-ignore
                            data={song}
                        />
                    </div>
                    <p className="col-start-9 col-end-12 lg:col-start-10 lg:col-end-11  text-neutral-400 text-xs sm:text-sm"> {
                        //@ts-ignore
                        timeLiked(song.created)
                    }</p>
                    <LikeButton
                        className="col-start-12 col-end-12 place-self-center"
                        songId={
                            //@ts-ignore
                            song.id
                        } />
                </div>
            ))}
        </div>
    )
}

export default LikedContent