import React ,{Component} from 'react';

import '../dist/styles.scss'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : 0
    }
  }
  render(){
    console.log("this is equipos state :", this.state.equipos);
    return(
        <div>
          <h1> Hola mundo</h1>
          <p>estamos aqui </p>
        </div>
    )
  }
}
