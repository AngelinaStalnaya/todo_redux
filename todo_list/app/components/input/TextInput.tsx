'use client';

import { SetStateAction, useState } from 'react';

const TextInput = () => {
    const [inputValue, setInputValue] = useState('');


    const handleTextInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(e.target.value)
        
    }

    return (
        <>
            <label htmlFor='text_input' className='flex text-blue-700 text-sm mb-1'>Enter new Todo:</label>
            <input id='text_input' type='text' onChange={handleTextInput} value={inputValue}
                className="flex min-w-[150px] text-blue-700 hover:text-purple-900 text-xl bg-transparent rounded-md p-2 border border-blue-700 hover:border-purple-900 transition-all mb-5" />
        </>
    )
}

export default TextInput;