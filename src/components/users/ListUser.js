import React, {Component} from 'react';
import User from "./User.js";

export default class ListUser extends Component{
    onDelete(id){
        this.props.handleDeleteUser(id);
    }

    onEdit(id){
        this.props.handleEditUser(id);
    }

    render(){

        let Users = this.props.users.map((user, index)=>{
            return (<User user={user} key={user.id} onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)}/>)
        });

        return (
                <div className="users">
                    <h1>List Of Users</h1>
                    <ul>
                        {Users}
                    </ul>
                </div>
            )
    }
}
