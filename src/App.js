
import Home from '../src/components/Home';

//crear array objetos
function App() {
  const arrayPerson = [
  {id: 1, name: 'Paula', years: 29 },
  {id: 1, name: 'Paula', years: 29 },
  {id: 1, name: 'Paula', years: 29 },

];
//crear componente y que salga hola
  return (
    <div className="App">
      <Home dadas={arrayPerson}/>
      
    </div>
  );
}

export default App;
