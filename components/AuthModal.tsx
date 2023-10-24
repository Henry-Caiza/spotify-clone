'use client'

import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

import { useRouter } from "next/navigation"

import Modal from "./Modal"

import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext()
    const { onClose, isOpen } = useAuthModal()

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        }
    }, [session, router, onClose])

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Modal
            title="Welcome"
            description="Start listening with a Stupify account for free"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                //magicLink
                providers={['google', 'facebook']}
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {

                        default: {
                            colors: {
                                brand: '#22c55e',
                                brandAccent: '#1fdf64',
                                defaultButtonText: 'black'
                            }
                        },
                        dark: {
                            colors: {
                                brandButtonText: 'white',
                                defaultButtonBackground: '#282828',
                                defaultButtonBackgroundHover: '#3e3e3e',
                            }
                        },

                    },
                    style: {
                        button: { borderRadius: '9999px' },
                        anchor: {},
                        label: { color: 'white' }
                        //..
                    },
                }}
            />

        </Modal>
    )
}

export default AuthModal