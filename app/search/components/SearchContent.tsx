'use client'

import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import useOnPlay from "@/hooks/useOnPlay"
import { Song } from "@/types"
import { BsFillPlayFill } from "react-icons/bs"
import { CiClock2 } from "react-icons/ci"

interface SearchContentProps {
    songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs,
}) => {

    const onPlay = useOnPlay(songs)

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No songs found.
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full">
            <h1 className="text-white text-2xl font-semibold mb-4 px-6">
                Browse all
            </h1>
            <div className="grid grid-cols-12  border border-t-0  border-x-0 border-neutral-700 py-1 sm:py-2 text-neutral-400 items-center text-xs sm:text-base bg-neutral-800/30">
                <p className="col-start-1 col-end-1 place-self-end">#

                </p>
                <p className="col-start-2 col-end-8 lg:col-start-2 lg:col-end-9 pl-11">Title</p>
                <CiClock2
                    className="col-start-12 col-end-12 place-self-setar"
                    size={20} />
            </div>

            {songs.map((song, i) => (
                <div
                    key={song.id}
                    className="grid grid-cols-12  hover:bg-neutral-800/50  rounded-md items-center relative group w-11/12 self-center"
                >
                    <div className="absolute left-2 sm:left-4 lg:left-6 xl:left-8">
                        <BsFillPlayFill className="transition opacity-0 items-center translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0" size={20} />
                    </div>
                    <p className="transition opacity-100 translate translate-y-1/4 group-hover:opacity-0 group-hover:translate-y-0 col-start-1 col-end-1 place-self-center text-neutral-400">{i + 1}</p>
                    <div className="flex flex-1 items-center col-start-2 col-end-8 lg:col-start-2 lg:col-end-11">
                        <MediaItem
                            className="hover:bg-neutral-800/0"
                            onClick={(id: string) => onPlay(id)}
                            data={song}
                        />
                    </div>
                    <LikeButton className="col-start-12 col-end-12 place-self-center" songId={song.id} />
                </div>
            ))}
        </div>
    )
}

export default SearchContent