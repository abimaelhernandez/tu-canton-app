import React ,{Component} from 'react';

import '../dist/styles.scss'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : 0
    }
  }

getTeams = () => {
  console.log("getting teams");
}
  render(){
    console.log("this is equipos state :", this.state.equipos);
    return(
        <div className="App">
          <div className="parent-container">
            <div className="getTeamContainer">
              <button className="getTeamsButton" onClick={this.getTeams}> get teams </button>
            </div>

            <div className="dropDownContainer">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>

          </div>
        </div>
    )
  }
}
