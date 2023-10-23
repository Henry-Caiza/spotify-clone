'use client'

import useDebounce from "@/hooks/useDebounce"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { FiSearch } from 'react-icons/fi'

import qs from "query-string"
import Input from "./Input"

const SearchInput = () => {

    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce<string>(value, 500)

    useEffect(() => {
        const query = {
            title: debouncedValue
        }

        const url = qs.stringifyUrl({
            url: "/search",
            query: query
        })

        router.push(url)
    }, [debouncedValue, router])


    return (
        <Input
            placeholder="What do you to listen to?"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="rounded-full bg-neutral-800 focus:border-white"
        >

        </Input>
    )
}

export default SearchInput