import React from 'react'


function List(){
    var array = [1,2,3,4,5,6];

    return <div>
   {array.map((i)=>
   <li>{i}</li>
       )}
    </div>
}

 export default List