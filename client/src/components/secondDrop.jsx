import React, {Component} from 'react';

export default class SecondDropDown extends Component {
  constructor(){
    super();
  }

  render(){
    console.log('props', this.props.name);
    if( this.props.name === ''){
      return(
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">click drop down 1</a>
          </div>
        </div>
      )
    }
    return (
      <div>hola mndo 2nd module</div>
    )
  }
}
