'use client'

import SongItem from "@/components/SongItem"
import useGetSongById from "@/hooks/useGetSongById"
import useLoadSongUrl from "@/hooks/useLoadSongUrl"
import useOnPlay from "@/hooks/useOnPlay"
import { Song } from "@/types"

const { Howl, Howler } = require('howler');

interface PageContentProps {
    songs: Song[]
}

const PageContent: React.FC<PageContentProps> = ({
    songs,
}) => {
    const onPlay = useOnPlay(songs)

    const urlSong = (id: string) => {
        const { song } = useGetSongById(id)
        const songUrl = useLoadSongUrl(song!)

        var sound2 = new Howl({
            src: songUrl,
            preload: true
        });
        console.log(sound2);




        // const srcSong = sound2._src

        //console.log(sound2._src);

        return songUrl

    }

    if (songs.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                No songs available.
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {
                songs.map((item) => (
                    <SongItem
                        key={item.id}
                        onClick={(id: string) => onPlay(id)}
                        data={item}
                    />
                ))
            }

        </div>
    )
}

export default PageContent