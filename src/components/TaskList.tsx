import { Clipboard, Trash } from 'phosphor-react'
import { Checkbox } from './Checkbox'
import { clsx } from 'clsx';
import { useState } from 'react';
import { Task } from '../App';

interface TaskListProps {
    list: {
        content: string;
        status: boolean;
    }[],
    changeStatus: (content: string) => void;
    onDeleteTask: (content: string) => void;
}

export function TaskList({ list, onDeleteTask, changeStatus }: TaskListProps){
    const  total = list.length;

    let [totalDone, setTotalDone] = useState(0);

    function totalTaskDone(status: boolean){
        if(!status){
            setTotalDone((state) => {
                return state + 1;
            });
        }else{
            setTotalDone((state) => {
                return state - 1;
            });
        }
    }

    function handleDeleteTask(task: Task){
        totalTaskDone( task.status)
        onDeleteTask(task.content)
    }

    function handleUpdatedStatus(task: Task){
        totalTaskDone( task.status)
        changeStatus(task.content)
    }

    return (
        <main className="mt-16">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-blue text-xs font-bold">Tarefas Criadas</h2>
                    <span className="bg-gray-400 text-xxs font-bold gap-2.5 rounded-[9px] text-gray-200 py-0.5 px-2">{ total }</span>
                </div>
                <div className="flex items-center gap-2">
                    <h2 className="text-purple text-xs font-bold">Concluídas</h2>
                    <span className="bg-gray-400 text-xxs font-bold gap-2.5 rounded-[9px] text-gray-200 py-0.5 px-2">
                        { total === 0 ? total : totalDone + ' de '+ total }
                    </span>
                </div>
            </header>
            <div className="mt-6 flex w-full flex-col gap-3">
                {
                    list.length === 0 && 

                    <div className="todoListDecorationNoResults flex items-center justify-center flex-col">
                        <Clipboard className="text-gray-400" size={56} />
                        <div className="mt-4">
                            <p className="mb-0 text-gray-300"><strong>Você ainda não tem tarefas cadastradas</strong></p>
                            <p className="mt-1 text-gray-300">Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                }
                { list.map(
                    task => {
                        return (
                            
                            <div key={task.content} className={ clsx(
                                'border bg-gray-500 border-gray-400 rounded flex flex-row items-center justify-between p-4',
                                {
                                    'line-through decoration-gray-300': task.status == true
                                })}>
                                <div className="gap-3 flex items-center w-[90%]">
                                    <Checkbox taskStatus={task.status} handleUpdatedStatus={()=> { handleUpdatedStatus( task ) }} />
                                    <p className={clsx(
                                        'text-gray-100 text-xs', {
                                            'text-gray-300': task.status == true
                                        }
                                    )}>{task.content}</p>
                                </div>
                                
                                <button onClick={()=> { handleDeleteTask( task) }} title="Deletar comentário" className="">
                                    <Trash size={24} className="text-gray-300 hover:text-danger focus:text-danger"/>
                                </button>
                                
                            </div>
                        )
                    }
                )}
            </div>
        </main>
    )
}