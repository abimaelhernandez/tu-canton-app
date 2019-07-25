import React, {Component} from 'react';

export default class SecondDropDown extends Component {
  constructor(){
    super();
  }


getID=(obj)=>{
console.log(obj.id);
}
  render(){
    console.log('props', this.props)
    let object2 = this.props.team;
    return(
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {object2.map((obj,i) => {
            return <ul key={obj.id}>
              <li onClick={this.getID.bind(this,obj)}>User: {obj.user_name}</li>
            </ul>
          })}
          <a className="dropdown-item" href="#">Press GET TEAMS </a>
        </div>
      </div>
    )
  }
}
