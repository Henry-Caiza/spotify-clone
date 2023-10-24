'use client'

import useLoadImage from "@/hooks/useLoadImage"
import usePlayer from "@/hooks/usePlayer"
import { Song } from "@/types"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface MediaItemProps {
    data: Song
    onClick?: (id: string) => void
    className?: string
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick,
    className
}) => {
    //console.log(data.id);

    const player = usePlayer()

    const imageUrl = useLoadImage(data)

    const handleClick = () => {


        if (onClick) {
            return onClick(data.id)
        }

        return player.setId(data.id)
    }

    return (
        <div
            onClick={handleClick}
            className={twMerge(`flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md`,
                className
            )}
        >
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image
                    fill
                    src={imageUrl || '/images/liked.png'}
                    alt="Media Item"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate  text-xs sm:text-base">
                    {data.title}
                </p>
                <p className="text-neutral-400 sm:text-sm text-xs truncate">
                    {data.author}
                </p>
            </div>
        </div>
    )
}

export default MediaItem