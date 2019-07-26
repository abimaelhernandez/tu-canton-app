import React, {Component} from 'react';

export default class SecondDropDown extends Component {
  constructor(){
    super();
  }


getID = (obj) => {
  console.log('hola mundo desde second component :');
}

  render(){
    this.getID();
    console.log('state in render second Component:', this.props.idForQuery)
    if(this.props.idForQuery === ''){
      return(
        <div className="alert alert-danger" role="alert">
          <h1>Select a User to Table with information</h1>
        </div>
      )
    }
    return(
      <div className="the-table-component">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Client ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
