

import getLikedSongs from "@/actions/getLikedSongs"
import Header from "@/components/Header"
import Image from "next/image"
import LikedContent from "./components/LikedContent"

export const revalidate = 0

const Liked = async () => {

    const songs = await getLikedSongs()

    return (
        <div className="bg-[#121212] rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-[#523CA0]">
                <div className=" mt-10">
                    <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative h-32 w-32 lg:h-56 lg:w-56 shadow-[0_35px_160px_-15px_rgba(0,0,0,0.8)]">
                            <Image
                                fill
                                src='/images/liked.png'
                                alt="Playlist"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                            <p className="hidden md:block font-semibold text-sm">
                                Playlist
                            </p>
                            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold z-40">
                                Liked Songs
                            </h1>

                        </div>
                    </div>
                </div>
            </Header>
            <LikedContent songs_Liked={songs} />
        </div>
    )
}

export default Liked