import React, { Component } from 'react';
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Cotizar criptomonedas al instante</h1>
            <Formulario/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
