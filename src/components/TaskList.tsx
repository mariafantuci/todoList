import { Clipboard, Trash, PencilSimple } from 'phosphor-react'
import { Checkbox } from './Checkbox'


export function TaskList(){
    return (
        <main className="mt-16">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-blue text-xs font-bold">Tarefas Criadas</h2>
                    <span className="bg-gray-400 gap-2.5 rounded-[999px] text-gray-200 py-0.5 px-2">0</span>
                </div>
                <div className="flex items-center gap-2">
                    <h2 className="text-purple text-xs font-bold">Concluídas</h2>
                    <span className="bg-gray-400 gap-2.5 rounded-[999px] text-gray-200 py-0.5 px-2">0</span>
                </div>
            </header>
            <div className="mt-6">
                <div className="todoListDecorationNoResults flex items-center justify-center flex-col">
                    <Clipboard className="text-gray-400" size={56} />
                    <div className="mt-4">
                        <p className="mb-0 text-gray-300"><strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p className="mt-1 text-gray-300">Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-3">
                    <div className="border bg-gray-500 border-gray-400 rounded flex flex-row items-center justify-between p-4">
                        <div className="gap-3 flex items-center w-[90%]">
                            <Checkbox />
                            <p className="text-gray-100 text-xs">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        </div>
                        <div className="flex items-end gap-2 w-[10%]">
                            <Trash size={24} className="text-gray-300 hover:text-danger focus:text-danger"/>
                            <PencilSimple size={24} className="text-gray-300 hover:text-gray-100 focus:text-gray-100"/>
                        </div>
                    </div>
                    <div className="border bg-gray-500 border-gray-400 rounded flex flex-row items-center justify-between p-4 line-through decoration-gray-300">
                        <div className="gap-3 flex items-center w-[90%]">
                            <Checkbox />
                            <p className="text-gray-300 text-xs">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        </div>
                        <div className="flex items-end gap-2 w-[10%]">
                            <Trash size={24} className="text-gray-300 hover:text-danger focus:text-danger"/>
                            <PencilSimple size={24} className="text-gray-300 hover:text-gray-100 focus:text-gray-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}