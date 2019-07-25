import React, {Component} from 'react';

export default class SecondDropDown extends Component {
  constructor(){
    super();
  }

  render(){
    console.log('props', this.props.team);
    if( this.props.sameTeam === undefined ){
      return(
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Press GET TEAMS </a>
          </div>
        </div>
      )
    }
    return (
      <div>hola mndo 2nd module</div>
    )
  }
}
