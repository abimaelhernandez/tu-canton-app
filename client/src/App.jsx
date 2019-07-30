import React ,{Component} from 'react';
import axios from 'axios';
import DataTable from './components/dataTable.jsx';
import '../dist/styles.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      equipos : [],
      sameTeam: [],
      theID : '',
      container : {
        id : ''
      }
    }
  }

getTeams = () => {
  axios.get('/getTeams')
    .then(res => {
      this.setState({
        equipos: res.data
      })
      console.log('get teams enpoint state:', res);
    })
    .catch( error =>{
      console.log("this is an error message  get teams :", error );
    })
}

getSpecificTeam (obj) {
    let teamId = obj.id;
    let container = this.state.container
    this.passToBack(teamId, container)
}

passToBack = (teamId, container) =>{
  let sendProp = {...this.state.container}
    container.id = teamId;
    this.setState({sendProp})
    axios.post("/getSpecificTeam", container)
    .then(res => {
      console.log(res);
      this.setState({
        sameTeam : res.data
      })
    })
    .catch(error => {
      console.log('error  :', error );
    })
}

getID = (obj) => {
  this.setState({theID : obj.id})
}


  render(){
    let object1 = this.state.equipos;
    let object2 = this.state.sameTeam;
    let idForQuery = this.state.theID;
    return(
        <div className="App">
          <div className="parent-container">
            <div className="getTeamContainer">
              <button className="getTeamsButton" onClick={this.getTeams}> obtener equipos </button>
            </div>
            <div className="dropDownContainer">

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Equipos
                </button>
                <section className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {object1.map((obj)=> {
                  return <ul key={obj.nombre}>
                    <li  className="dropdown-item" href="#" onClick={this.getSpecificTeam.bind(this, obj)}>{obj.nombre}</li>
                  </ul>
                })}
                </section>
              </div>

              <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Usuarios
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {object2.map((obj,i) => {
                        return <ul key={obj.id}>
                          <li className="dropdown-item" onClick={this.getID.bind(this, obj)}>{obj.nombre}</li>
                        </ul>
                      })}
                      <a className="dropdown-item" href="#">selecciona un equipo </a>
                    </div>
                  </div>
              </div>

            </div>

            <div className="table-container">
              <DataTable idForQuery={idForQuery}/>
            </div>
          </div>
        </div>
    )
  }
}
