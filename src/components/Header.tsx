import logo from '../assets/logo.svg'

export function Header(){
    return (
        <header className="bg-gray-700 flex items-center justify-center gap-3.5 py-20">
            <img src={logo} className="h-14 w-28" alt="Todo List logo" />
        </header>
    );
}