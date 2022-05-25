import axios from 'axios';
import React from 'react';
import UserDesign from './UserDez';

class UserList extends React.Component {
    state = {
        users: []
    }
    constructor() {
        super()
        axios.get("https://api.github.com/users").then((res) => {
            const data = res.data
            this.setState({users: data})
        }).catch(err => console.log(err))
    }
    render() {
        return <>{
            this.state.users.map((user) => {
                return <UserDesign user={user}/>
            })
        }</>
    }
}


export default UserList
