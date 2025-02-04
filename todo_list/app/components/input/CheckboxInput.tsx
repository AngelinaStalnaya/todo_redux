'use client';

import { useState } from "react";

interface CheckboxInputProps {
  id?: string | undefined;
  text: string;
}


const CheckboxInput = ({ text, id }: CheckboxInputProps) => {
  const [done, setDone] = useState(false)

  const handleCheckInputClick = () => {
    console.log('input clicked')
    setDone(!done)
  }

  return (

    <label className="flex flex-row-reverse gap-2 hover:text-blue-700 transition-all">{text}
      <input type="checkbox" checked={done} id={id} onChange={handleCheckInputClick} 
      className="flex text-xl text-blue-700 hover:text-purple-900" />
    </label>

  )
}

export default CheckboxInput;