import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NavBar/NabVar';
import ItemListContainer from './components/NavBar/ItemListContainer'

function App() {
return (
  <div className="App">

  <NabVar/>
  <ItemListContainer greeting="Hola Soy ItemListContainer"/>

  </div>


)
}

export default App;
