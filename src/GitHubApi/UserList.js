import axios from 'axios';
import React from 'react';
import UserDesign from './UserDez';
import Loader from '../image/loader.gif'
import ShouldRender from '../utils/ShouldRender'

class UserList extends React.Component {
    state = {
        users: [],
        loading: true
    }
    constructor() {
        super()
        axios.get("https://api.github.com/users").then((res) => {
            const data = res.data
            this.setState({users: data, loading: false})
        }).catch(err => console.log(err))
    }
    render() {
        return <div> 
        < ShouldRender cond = {this.state.loading}>
         <div className='loader'>
                <img width='120px' height='50px'
                    src={Loader}/>loading...
            </div>
            </ShouldRender>
        
            {
            this.state.users.map((user) => {
                return <UserDesign user={user}/>
            })
        }</div>
    }
}


export default UserList
