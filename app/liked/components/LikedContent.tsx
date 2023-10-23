'use client'

import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import useOnPlay from "@/hooks/useOnPlay"
import { useUser } from "@/hooks/useUser"
import { Song } from "@/types"
import { useRouter } from "next/navigation"

import { CiClock2 } from "react-icons/ci"

import { useEffect } from 'react'

//import useLoadSongUrl from "@/hooks/useLoadSongUrl"

import dayjs from 'dayjs'
import useGetSongById from "@/hooks/useGetSongById"
var relativeTime = require('dayjs/plugin/relativeTime')


//const { Howl, Howler } = require('howler');


interface LikedContentProps {
    songs_Liked: Song[]

}

const LikedContent: React.FC<LikedContentProps> = ({
    songs_Liked,
}) => {



    const onplay = useOnPlay(songs_Liked)

    const router = useRouter()
    const { isLoading, user } = useUser()


    // const urlSong = (id: string) => {
    //     const { song } = useGetSongById(id)
    //     const songUrl = useLoadSongUrl(song!)

    //     var sound2 = new Howl({
    //         src: songUrl,
    //         preload: true
    //     });
    //     // console.log(sound2);

    //     return sound2

    // }


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
        <div className="flex flex-col gap-y-2 p-6">
            <div className="grid grid-cols-12  border border-t-0  border-x-0 border-neutral-700 p-2 text-neutral-400 items-center">
                <p className="col-start-1 col-end-1 place-self-center">#</p>
                <p className="col-start-2 col-end-9">Title</p>
                <p className="col-start-10 col-end-11">Date added</p>
                <CiClock2
                    className="col-start-12 col-end-12 place-self-center"
                    size={20} />
            </div>


            {songs_Liked.map((song, i) => (
                <div
                    //@ts-ignore
                    // onClick={urlSong(i + 1)}
                    key={
                        //@ts-ignore
                        song.songs.id
                    }
                    className="grid grid-cols-12  hover:bg-neutral-800/50  rounded-md items-center"
                >
                    <p className="col-start-1 col-end-1 place-self-center text-neutral-400">{i + 1}</p>

                    <div className="flex flex-1 items-center col-start-2 col-end-9">

                        <MediaItem
                            className="hover:bg-neutral-800/0"
                            onClick={(id: string) => onplay(id)}
                            //@ts-ignore
                            data={song.songs}
                        />
                    </div>
                    <p className="col-start-10 col-end-11 text-neutral-400 text-sm"> {
                        //@ts-ignore
                        timeLiked(song.created_at)
                    }</p>
                    <LikeButton
                        className="col-start-12 col-end-12 place-self-center "
                        songId={
                            //@ts-ignore
                            song.songs.id
                        } />


                </div>
            ))}
        </div>
    )
}

export default LikedContent