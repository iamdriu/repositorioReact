import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Próximamente nuestro listado"/>
    </div>
  );
}

export default App;
