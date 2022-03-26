import { useState } from 'react'
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';


function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Próximamente nuestro listado"}/>
      <ItemCount initial={1} stock={20} onAdd={onAdd}/>
    </div>
  );
}

export default App;
