import React, {Component} from 'react';

export default class User extends Component{
    deleteUser(id){
        this.props.onDelete(id);
    }

    editUser(id){
        this.props.onEdit(id);
    }

    render(){
        return (
                <li className="user-component">
                    Name : {this.props.user.name} , Age : {this.props.user.age}
                    <a href="#" onClick={this.deleteUser.bind(this, this.props.user.id)}> X </a>
                    <a href="#" onClick={this.editUser.bind(this, this.props.user.id)}> Edit </a>
                </li>
            );
    }
}
