'use client'

import { useEffect, useState } from 'react'

const { useSound } = require('use-sound');

import { Song } from "@/types"
import MediaItem from "./MediaItem"
import LikeButton from "./LikeButton"

import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"

import usePlayer from "@/hooks/usePlayer"

import dayjs from 'dayjs'

interface PlayerContentProps {
    song: Song
    songUrl: string
}

const PlayerContent: React.FC<PlayerContentProps> = ({
    song,
    songUrl
}) => {

    const player = usePlayer()
    const [volume, setVolume] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)

    const Icon = isPlaying ? BsPauseFill : BsPlayFill
    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave
    //console.log(player);

    const onPlayNext = () => {
        if (player.ids.length === 0) {
            return
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId)
        const nextSong = player.ids[currentIndex + 1]

        if (!nextSong) {
            return player.setId(player.ids[0])
        }

        player.setId(nextSong)
    }

    const onPlayPrevious = () => {
        if (player.ids.length === 0) {
            return
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId)
        const previousSong = player.ids[currentIndex - 1]

        if (!previousSong) {
            return player.setId(player.ids[player.ids.length - 1])
        }

        player.setId(previousSong)
    }

    const [play, { pause, sound }] = useSound(
        songUrl,
        {
            // playbackRate,
            volume: volume,
            //  volume: 0,
            // autoplay: true,
            onplay: () => setIsPlaying(true),
            onend: () => {
                setIsPlaying(false)
                onPlayNext()
            },
            onpause: () => setIsPlaying(false),
            format: ['mp3']
        }
    )
    //console.log(sound);


    useEffect(() => {
        // sound?.play()
        return () => {
            sound?.unload()
        }
    }, [sound])

    const durationSong = sound?.duration()

    const durationM = dayjs.unix(durationSong).minute()
    const durationS = dayjs.unix(durationSong).second()

    const durationMinSec = durationM + ':' + durationS


    const handlePlay = () => {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    }

    const toogleMute = () => {
        if (volume === 0) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    }



    return (
        <div className="grid grid-cols-2 md:grid-cols-3 h-full">
            <div className="flex w-full justify-start col-start-1 col-end-1">
                <div className="flex items-center gap-x-4">
                    <MediaItem
                        data={song}
                    />
                    <LikeButton
                        className='z-50'
                        songId={song.id}
                    />
                </div>
            </div>
            <div className="flex h-full md:flex ml-8 sm:-ml-4 md:ml-4 lg:ml-0 justify-center items-center w-full col-span-1 md:col-span-2 relative">
                <AiFillStepBackward
                    onClick={onPlayPrevious}
                    size={25}
                    className="text-neutral-400 cursor-pointer hover:text-white transition absolute left-[55px]  sm:left-[40px] z-10"
                />
                <audio
                    controls
                    autoPlay
                    src={songUrl}
                    onEnded={onPlayNext}
                    className='w-full'
                >
                </audio>
                <AiFillStepForward
                    onClick={onPlayNext}
                    size={25}
                    className="text-neutral-400 cursor-pointer hover:text-white transition absolute left-[112px] sm:left-[125px]"
                />
            </div>


        </div>
    )
}

export default PlayerContent