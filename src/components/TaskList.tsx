import { Clipboard } from 'phosphor-react'
export function TaskList(){
    return (
        <main className="mt-16">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-blue text-xs">Tarefas Criadas</h2>
                    <span className="bg-gray-400 gap-2.5 rounded-[999px] text-gray-200 py-0.5 px-2">0</span>
                </div>
                <div className="flex items-center gap-2">
                    <h2 className="text-purple text-xs">Concluídas</h2>
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

            </div>
        </main>
    )
}