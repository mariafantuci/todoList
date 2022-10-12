import { InputHTMLAttributes } from 'react';
import { PlusCircle } from 'phosphor-react'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>{}

export function InputText(props: InputTextProps){
    return (
        <form className="flex items-center gap-2 w-full -mt-[30px]">
            <input
                {...props}
                className="flex w-full items-center justify-center bg-gray-500 p-4 border-black text-sm  rounded text-gray-100 placeholder:text-gray-300 focus:ring-2 focus:ring-focus"
            />
            <button className="bg-blue-dark rounded text-gray-100 flex items-center justify-center w-[16%] font-bold text-xs py-4 gap-1 transition-colors hover:bg-blue">
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    );
}