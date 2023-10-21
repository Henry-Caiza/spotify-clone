import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {

    const subscripbeModal = useSubscribeModal()

    const player = usePlayer()
    const authModal = useAuthModal()
    const { user, subscription } = useUser()

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen()
        }

        //for not reproduce any song unless you are subscribed

        // if (!subscription) {
        //     return subscripbeModal.onOpen()
        // }

        player.setId(id)
        player.setIds(songs.map((song) => song.id))
    }

    return onPlay
}

export default useOnPlay