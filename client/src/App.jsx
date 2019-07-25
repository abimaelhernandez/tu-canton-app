import React ,{Component} from 'react';
import axios from 'axios';
import SecondDropDown from './components/secondDrop.jsx';
import '../dist/styles.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : [],
      name: '',
      container : {
        name : ''
      }
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

getSpecificTeam (obj) {
    let name = obj.team_name;
    let container = this.state.container
    this.passToBack(name, container)
}

passToBack = (name, container) =>{
  let sendProp = {...this.state.container}
    container.name = name;
    this.setState({sendProp})
    console.log('passing to back :', container);
    axios.post("/rfcEndPoint", container)
    .then(res => {
      console.log('response of RFC endpoint :', res);
    })
    .catch(error => {
      console.log('error of rfc enpoint :', error );
    })
}

  render(){
    let object1 = this.state.equipos;
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
                  return <ul>
                    <li className="dropdown-item" href="#" onClick={this.getSpecificTeam.bind(this, obj)}>{obj.team_name}</li>
                  </ul>
                })}
                  <a className="dropdown-item" href="#">Press GET TEAMS </a>
                </section>
              </div>

              <div>
                <SecondDropDown name={this.state.name}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
