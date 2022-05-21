import React from 'react'


function List(){
    var array = [1,2,3,4,5,6];

    return <div>
        <ul>
            <li>{array[0]}</li>
            <li>{array[2]}</li>
            <li>{array[3]}</li>
            <li>{array[4]}</li>
            <li>{array[5]}</li>
        </ul>
    </div>
}

 export default List