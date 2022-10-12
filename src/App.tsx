import { Header } from './components/Header';
import { InputText } from './components/InputText';
import './styles/global.css'

export function App() {   
  return (
    <>
      <Header />
        <div className="w-11/12 mx-auto md:w-3/5 lg:w-1/3">
          <InputText placeholder="Adicione uma nova tarefa"/>
        </div>
    </>
  );
}