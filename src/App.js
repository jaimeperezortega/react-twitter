
import './App.css';
import TweetsPage from './components/tweets/TweetsPage';
import Button from './components/shared/Button';



//EL COMPONENTE APP ES UN COMPONENTE DE TIPO FUNCTION QUE DEVUELVE EL DIV CON LAS CLASSNAME APP QUE VEMOS MÁS ABAJO
function App() {
  return (
    <div className="App">
      <Button variant ="primary" > Log in </Button>
     <TweetsPage />
    </div>
  );
}

export default App;
