import axios from 'axios';
import React from 'react';
import UserDesign from './UserDez';
import ShouldRender from '../utils/ShouldRender'
import Loader from '../utils/Loader';
import Error from '../utils/Error';

class UserList extends React.Component {
    state = {
        users: [],
        loading: true,
        error:false
    }
    constructor() {
        super()
        axios.get("https://api.github.com/users")
        .then((res) => {
            const data = res.data
            this.setState({users: data, loading: false})
        })
        .catch((err) =>{this.setState({loading:false,error:true}
            )
        }
        )
    }
    render() {
        return <div> 
            < ShouldRender cond = {this.state.loading}>
            <Loader/>
            </ShouldRender>

            <ShouldRender cond = {this.state.error}>
               <Error/>
            </ShouldRender>
            {
            this.state.users.map((user) => {
                return <UserDesign user={user}/>
            })
        }</div>
    }
}


export default UserList
