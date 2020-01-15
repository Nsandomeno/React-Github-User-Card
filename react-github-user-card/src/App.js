import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './Components/UserList';


const username = 'NSandomeno'
const url = 'https://api.github.com/users/'

class App extends React.Component {
  constructor(props) { 
    super(props) 
    this.state = {
    userData: {},
    followerData: []
  }

}

async componentDidMount() {
// Get my own data
let gitUser = await axios .get(url + username)
// Get data for each of my followers
// let followerArray = []
await axios.get(url+username+'/followers')
    .then(response => {
        response.data.forEach(follower => {
            axios.get(`https:api.github.com/users/${follower.login}`)
            .then(response => {
              this.setState({
                followerData: [...this.state.followerData, response.data]
              }) 
            })
        })
    })
    .catch(error => {
        console.log('Error from UserList:', error)
    });
    // this is successfully getting set
    this.setState({
      userData: gitUser.data,
      // followerData: followerArray
    })

    console.log("CDM")
}

  render() {

    console.log("THIS IS APP STATE:", this.state)
  return (
    <div className="App">
      <UserList userData={this.state.userData} followerData={this.state.followerData} />
    </div>
    );
  }
}

export default App;
