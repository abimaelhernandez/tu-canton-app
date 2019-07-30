import React, {Component} from 'react';
import axios from 'axios';

export default class DataTable extends Component {
  constructor(){
    super();
    this.state = {
      clientInfo : [],
      container : {
        userID : ''
      }
    }
  }

getID = () => {
  let passedID = this.props.idForQuery;
  let container = this.state.container
  this.getClient(passedID, container)
}

getClient = (passedID, container) => {
  let sendProp = {...this.state.container};
  container.userID = passedID;
  this.setState({sendProp})
  axios.post('/clientes', container)
  .then(res =>{
    this.setState({ clientInfo : res.data})
    console.log('response in get client :',this.state.clientInfo);
  })
  .catch(err =>{
    console.log(err);
  })
}

  render(){
    let object3 = this.state.clientInfo;
    if(this.props.idForQuery === ''){
      return(
        <div>
        <div className="the-table-component">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Client ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
          </table>
        </div>
        </div>
      )
    }
    return(
      <div>
      <div className="the-table-component">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Client ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {object3.map((obj) => {
          return <tbody key={obj.id}>
                <tr>
                <th scope="row">{obj.id}</th>
                <td>{obj.usuario_id}</td>
                <td>{obj.email}</td>
              </tr>
          </tbody>
        })}
        </table>
      </div>
      <button onClick={this.getID}>GET CLIENT INFORMATION </button>
    </div>
    )
  }
}
