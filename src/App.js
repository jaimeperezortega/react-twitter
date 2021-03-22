
import './App.css';
import TweetsPage from './components/tweets/TweetsPage';



//EL COMPONENTE APP ES UN COMPONENTE DE TIPO FUNCTION QUE DEVUELVE EL DIV CON LAS CLASSNAME APP QUE VEMOS MÁS ABAJO
function App() {
  return (
    <div className="App">
     <TweetsPage />
    </div>
  );
}

export default App;
