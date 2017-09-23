import React, {Component} from 'react';
import uuid from 'uuid';

export default class AddUser extends Component{

    constructor(){
        super();
        this.state = {
            newUser : {}
        };
    }

    static defaultProps = {
        sex : ["Male", "Female"]
    }

    handleSubmit(e){
        e.preventDefault();
        let user = this.state.newUser;

        if(this.refs.id !== undefined){
            user.id = this.refs.id.value;
            user.isEdit = true;
        }else{
            user.id = uuid.v4();
            user.isEdit = false;
        }

        user.name = this.refs.name.value;
        user.age = this.refs.age.value;
        user.sex = this.refs.sex.value;

        this.refs.name.value = "";
        this.refs.age.value = "";

        this.setState({newUser : user}, ()=>{
            this.props.handleAddUser(this.state.newUser);
        });
    }

    render(){

        let sexOptions = this.props.sex.map((s)=>{
            return (<option value={s} key={s}>{s}</option>);
        });

        if(Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object){
            return (
                <div className="userForm">
                    <h1>Add User</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Name </label> <br />
                        <input type="text" ref="name" /> <br />
                        <label>Age </label> <br />
                        <input type="number" ref="age" /> <br />
                        <label>Sex </label> <br/>
                        <select ref="sex">
                            {sexOptions}
                        </select> <br />
                        <input type="submit" value="Add User"/>
                    </form>
                </div>
            );
        }else{
            return (
                <div className="userForm">
                    <h1>Edit User</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="hidden" ref="id" value={this.props.user.id}/>
                        <label>Name </label> <br />
                        <input type="text" ref="name" value={this.props.user.name}/> <br />
                        <label>Age </label> <br />
                        <input type="number" ref="age" value={this.props.user.age}/> <br />
                        <label>Sex </label> <br/>
                        <select ref="sex">
                            {sexOptions}
                        </select> <br />
                        <input type="submit" value="Edit User"/>
                    </form>
                </div>
            );
        }


    }
}
