'use client'

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import Button from "./Button"

import { toast } from "react-hot-toast"

import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from "@/hooks/useUser"

import useAuthModal from "@/hooks/useAuthModal"
import usePlayer from "@/hooks/usePlayer"
import Link from "next/link"



interface HeaderProps {
    children: React.ReactNode
    className?: string
}


const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    // console.log(className);


    const player = usePlayer()

    const authModal = useAuthModal()
    const router = useRouter()

    const supabaseClient = useSupabaseClient()
    const { user } = useUser()
    const dataUser = useUser()
    //console.log(dataUser);



    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut()
        player.reset()
        router.refresh()

        if (error) {
            toast.error(error.message)
        } else {
            toast.success('You have been logged out')
        }
    }

    return (
        <div className={twMerge(
            `h-fit bg-gradient-to-b from-emerald-800 p-6`,
            className
        )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        onClick={() => router.back()}
                        className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <Link href='/'>
                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                            <HiHome className="text-black" size={20} />
                        </button>
                    </Link>
                    <Link href='/search'>
                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                            <BiSearch className="text-black" size={20} />
                        </button>
                    </Link>

                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-white px-6 py-2">
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className={`bg-white ${dataUser.userDetails?.avatar_url ? 'p-0' : 'p-3'}`}
                            >

                                {dataUser.userDetails?.avatar_url ? (
                                    <img src={dataUser.userDetails?.avatar_url} alt="avatar" className="w-10 h-10 rounded-full" />
                                ) : (
                                    <div className="bg-[#613eedc4] w-10 h-10 justify-center rounded-full flex items-center">
                                        <p className="text-xl text-white">{user.email?.slice(0, 1)}</p>
                                    </div>
                                )}

                            </Button>

                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}
                                    className="bg-transparent text-neutral-300 font-medium">
                                    Sign up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={authModal.onOpen}
                                    className="bg-white px-6 py-2">
                                    Log in
                                </Button>
                            </div>
                        </>
                    )}

                </div>
            </div>
            {children}
        </div>
    )
}

export default Header