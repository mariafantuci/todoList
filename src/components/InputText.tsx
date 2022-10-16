import { ChangeEvent, InvalidEvent } from 'react';
import { PlusCircle } from 'phosphor-react'
import { FormEvent } from 'react';


interface InputTextProps{
    handleAddNewTaskTheList: () => void;
    handleNewTask: (value: string) => void;
    valueNewTask: string;
}

export function InputText({ handleAddNewTaskTheList, handleNewTask, valueNewTask }: InputTextProps){
    
    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        handleNewTask(event.target.value);
    }

    function handleOnSubmit(event: FormEvent){
        event.preventDefault();
        handleAddNewTaskTheList();
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex items-center gap-2 w-full -mt-[30px]">
            <input
                onChange={handleOnChange}
                value={valueNewTask}
                onInvalid={handleNewCommentInvalid}
                required
                placeholder="Adicione uma nova tarefa"
                className="flex w-full items-center justify-center bg-gray-500 p-4 border-black text-sm  rounded text-gray-100 placeholder:text-gray-300 focus:ring-2 focus:ring-focus"
            />
            <button className="bg-blue-dark rounded text-gray-100 flex items-center justify-center w-1/4 2xl:w-[16%] font-bold text-xs py-4 gap-1 transition-colors hover:bg-blue">
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    );
}