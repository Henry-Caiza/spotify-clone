import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void
    title: string
    description: string
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal >
                <Dialog.Overlay className='bg-black/80 backdrop-blur-sm fixed inset-0 ' />
                <Dialog.Content
                    className='fixed drop-shadow-md border border-transparent top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[88vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gradient-to-tl from-[#282828] to-[#323232] p-[25px] focus:outline-none'
                >
                    <Dialog.Title
                        className='text-xl text-center font-bold mb-4'
                    >
                        {title}
                    </Dialog.Title>
                    <Dialog.Description
                        className='mb-5 text-sm lg:text-2xl lg:font-semibold leading-normal text-center'
                    >
                        {description}
                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className='text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none'
                        >
                            <IoMdClose size="2em" color="#fff" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}

export default Modal