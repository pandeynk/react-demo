import React, { Component } from 'react';
import uuid from 'uuid';

import ListUser from "./components/users/ListUser";
import AddUser from "./components/users/AddUser";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users : [],
      editUser : {}
    }
  }

  componentWillMount(){
    let tempState = this.state;

    tempState.users = [{
      id : uuid.v4(),
      name : "Nandan Pandey",
      age : 23,
      sex : "Male"
    }, {
      id : uuid.v4(),
      name : "Navin Tiwary",
      age : 24,
      sex : "Male"
    }];

    tempState.editUser = {};

    this.setState(tempState);
  }

  handleAddUser(newUser){
    let tempUsers = this.state.users;
    if(newUser.isEdit){
      let index = tempUsers.findIndex((user)=>{
        return user.id === newUser.id
      });
      tempUsers.splice(index, 1, newUser);
      this.setState({users: tempUsers, editUser: {}});
    }else{
      let tempUsers = this.state.users;
      tempUsers.push(newUser);
      this.setState({users: tempUsers, editUser: {}});
    }

  }

  handleDeleteUser(id){
    let tempUsers = this.state.users;
    let index = tempUsers.findIndex((user)=>{
      return user.id === id
    });
    tempUsers.splice(index);
    this.setState({users: tempUsers, editUser: {}});
  }

  handleEditUser(id){
    let tempUsers = this.state.users;
    let index = tempUsers.findIndex((user)=>{
      return user.id === id
    });
    let user = tempUsers[index];
    this.setState({users: tempUsers, editUser: user});
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <ListUser users={this.state.users} handleDeleteUser={this.handleDeleteUser.bind(this)} handleEditUser={this.handleEditUser.bind(this)}/>

        <AddUser handleAddUser={this.handleAddUser.bind(this)} user={this.state.editUser}/>
      </div>
    );
  }

  componentDidMount(){}
}

export default App;
