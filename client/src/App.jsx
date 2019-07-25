import React ,{Component} from 'react';
import axios from 'axios';
import SecondDropDown from './components/secondDrop.jsx';
import '../dist/styles.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : [],
      sameTeam: [],
      container : {
        name : ''
      }
    }
  }

getTeams = () => {
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

getSpecificTeam (obj) {
    let name = obj.team_name;
    let container = this.state.container
    this.passToBack(name, container)
}

passToBack = (name, container) =>{
  let sendProp = {...this.state.container}
    container.name = name;
    this.setState({sendProp})
    axios.post("/getSpecificTeam", container)
    .then(res => {
      console.log('response of getSpecificTeam endpoint :', res.data);
      this.setState({
        sameTeam : res.data
      })
    })
    .catch(error => {
      console.log('error of getSpecificTeam :', error );
    })
}

  render(){
    let object1 = this.state.equipos;
    console.log("mt object 1 ", object1);
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
                <section className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {object1.map((obj)=> {
                  return <ul key={obj.team_name}>
                    <li  className="dropdown-item" href="#" onClick={this.getSpecificTeam.bind(this, obj)}> Team name: {obj.team_name}</li>
                  </ul>
                })}
                  <a className="dropdown-item" href="#">Press GET TEAMS </a>
                </section>
              </div>

              <div>
                <SecondDropDown team={this.state.sameTeam}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
