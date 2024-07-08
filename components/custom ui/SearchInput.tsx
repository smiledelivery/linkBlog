import React from 'react'
import { Input } from '../ui/input'

const SearchInput = () => {
    return (
        <div>
            <Input
                type="text"
                placeholder="Search..."
                className='w-80 rounded-lg border-none bg-[#EDF3F8]'
            />

        </div>
    )
}

export default SearchInput
