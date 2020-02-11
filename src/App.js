import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'David'
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'David' ? 'Jude' : 'David'
    })
  }

  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>

        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>
      </div>
    )
  }
}
