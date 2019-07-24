import React ,{Component} from 'react';
import axios from 'axios';
import '../dist/styles.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : []
    }
  }

getTeams = () => {
  console.log("getting teams");
  axios.get('/getTeams')
    .then(res => {
      this.setState({
        equipos: res.data
      })
      console.log('get teams enpoint state:', this.state.equipos);
    })
    .catch( error =>{
      console.log("this is an error message  get teams :", error );
    })
}
  render(){
    console.log("this is equipos state :", this.state.equipos);
    let object1 = this.state.equipos;
    return(
        <div className="App">
          <div className="parent-container">
            <div className="getTeamContainer">
              <button className="getTeamsButton" onClick={this.getTeams}> get teams </button>
            </div>
            <div className="dropDownContainer">
              <div className="dropdown">
                {object1.map((obj,i)=> {
                  console.log('hi team names :',obj.team_name);
                  return <ul>
                    <li>{obj.team_name}</li>

                  </ul>
                })}
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Something else here DB stuff </a>
                  <a className="dropdown-item" href="#">Something else here DB stuff </a>
                  <a className="dropdown-item" href="#">Something else here DB stuff </a>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  }
}
