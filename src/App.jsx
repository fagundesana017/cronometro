//imports do react
import React, { Component } from 'react';

//imports de styles
import './styles.css';

class App extends Component{
  
  constructor(props){
  super(props);
  this.state = {
    numero: 0,
    button: 'INICIAR'
  }

  this.timer = null
  this.iniciar = this.iniciar.bind(this);
  this.zerar = this.zerar.bind(this);
 
  }

      
  iniciar(){
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.button = "INICIAR";
    } else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
      this.setState(state);
      },100);
      state.button = "PAUSAR"
    }
  this.setState(state);
  }

   zerar(){
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.button = 0;
    state.button = "INICIAR"
    this.setState(state)
   }

  //render() => responsavel por colocar e recolocar as informaçoes na tela(obrigatorio)
  render(){
    return (
      <div className='container'>
      <img src={require('./assets/cronometro.png')} className="img" />
      <a className='timer'>{this.state.numero.toFixed(1)}</a>
      <div className="areaBtn">
             <a className="button" onClick={this.iniciar}>{this.state.button}</a>
             <a className="button" onClick={this.zerar}>ZERAR</a>
            </div>
      </div>
    );
  }
}

export default App;
