function UserDesign({user}){
   return  <div>
                    <img className='img img-thumbnail' style={{borderRadius:'50px'}}  height='100x' width='50px' src={  user.avatar_url} alt ='avatar'></img><br/>
                    {user.login}
                    <hr></hr>
                </div>
}


export default UserDesign