import React from 'react'
import ReactDOM from 'react-dom'

//This is an ES6 based ReactJS code

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note1: this.props.note1,
      note2: this.props.note2,
      name1: this.props.name1[0]+ " " + this.props.name1[1],
      name2: this.props.name2[0]+ " " + this.props.name2[1],
      friends1: this.props.friends1,
      friends2: this.props.friends2
    }
  }
  addFriend(friend) {
    this.setState({
      friends1: this.state.friends1.concat([friend]),
      friends2: this.state.friends2.concat([friend])
    });
  }
  render() {
    const myStyle1 = {
      borderStyle:  "solid",
      borderWidth: 5,   //outside <div>
      marginLeft: 150,
      marginRight: 100,
      marginTop: 50,
      paddingLeft: 20,  //inside <div>
      paddingTop: 5,
      fontFamily: "Dosis"
    }
    const myStyle2 = {
      color: "indigo",
      fontSize: 50
    }
    const myStyle3 = {
      color: "brown",
      fontSize: 40
    }
    return (
    <div>
      <div style={myStyle1}>
        <h1 style={myStyle2}>{this.state.note1}</h1>
        <h2 style={myStyle3}>Name: &nbsp;&nbsp;{this.state.name1}</h2>
        <AddFriend1 addNew1={this.addFriend.bind(this)} />
        <ShowList1 names1={this.state.friends1} />
      </div>

      <div style={myStyle1}>
        <h1 style={myStyle2}>{this.state.note2}</h1>
        <h2 style={myStyle3}>Name: &nbsp;&nbsp;{this.state.name2}</h2>
        <AddFriend2 addNew2={this.addFriend.bind(this)} />
        <ShowList2 names2={this.state.friends2} />
      </div>
    </div>
    );
  }
}
FriendsList.defaultProps = {
  note1: "Creating an interactive App1 in ReactJS.",
  note2: "Creating an interactive App2 in ReactJS.",
  name1: ['Isaac', 'Newton'],
  name2: ['Albert', 'Einstein'],
  friends1: [
    'Renee Descartes',
    'Edmund Halley',
    'Robert Hooke',
    'Gottfried von Leibniz',
    'Anonymous Friend',
    'Big Fan'
  ],
  friends2: [
    'Tom Sawyer',
    'Huck Fin',
    'Buck Rogers',
    'Peter Pan',
    'Kermit the Frog',
    'Miss Piggy'
  ]
}
FriendsList.propTypes = {
  note1: React.PropTypes.string,
  note2: React.PropTypes.string,
  name1: React.PropTypes.array.isRequired,
  name2: React.PropTypes.array.isRequired,
  friends1: React.PropTypes.array.isRequired,
  friends2: React.PropTypes.array.isRequired
}

class AddFriend1 extends React.Component {
  updateNewFriend(e) {
    this.setState({
      newFriend1: e.target.value
    });
  }
  handleAddFriend() {
    this.props.addNew1(this.state.newFriend1);
    this.setState({
      newFriend1: ''
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.updateNewFriend.bind(this)} placeholder="Type new friend here" />
        <button onClick={this.handleAddFriend.bind(this)}>Add Friend</button>
      </div>
    );
  }
}
AddFriend1.defaultProps = {
  newFriend1: ''
}
AddFriend1.propTypes = {
  addNew1: React.PropTypes.func.isRequired
}

class AddFriend2 extends React.Component {
  updateNewFriend(e) {
    this.setState({
      newFriend2: e.target.value
    });
  }
  handleAddFriend() {
    this.props.addNew2(this.state.newFriend2);
    this.setState({
      newFriend2: ''
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.updateNewFriend.bind(this)} placeholder="Type new friend here" />
        <button onClick={this.handleAddFriend.bind(this)}>Add Friend</button>
      </div>
    );
  }
}
AddFriend2.defaultProps = {
  newFriend2: ''
}
AddFriend2.propTypes = {
  addNew2: React.PropTypes.func.isRequired
}

// class ShowList extends React.Component {
//   render() {
//     var listItems = this.props.names.map((item) => {
//       return <li key={item}>{item}</li>
//     })
//     return (
//       <div>
//         <h3>Friends</h3>
//         <ul>{listItems}</ul>
//       </div>
//     );
//   }
// }
class ShowList1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
        {this.props.names1.map(item => 
          <li key={item}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}
ShowList1.defaultProps = {
  names1: []
}
ShowList1.propTypes = {
  names1: React.PropTypes.array.isRequired
}

class ShowList2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <ul>
        {this.props.names2.map(item => 
          <li key={item}>{item}</li>
        )}
        </ul>
      </div>
    );
  }
}
ShowList2.defaultProps = {
  names2: []
}
ShowList2.propTypes = {
  names2: React.PropTypes.array.isRequired
}

ReactDOM.render(
  <FriendsList />, document.getElementById('root')
); 
