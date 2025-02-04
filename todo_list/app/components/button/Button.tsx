'use client';

const Button = ({ children}: {children: string}) => {
    return (
        <button onClick={() => console.log('btn clicked')} 
        className="min-w-[60px] border border-purple-900 p-2 rounded-md text-purple-900 hover:text-blue-700 hover:border-blue-700 transition-all ">
            {children}
        </button>
    )
}

export default Button;