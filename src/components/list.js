// import React, { Component } from 'react'
// import axios from 'axios'


// export default class List extends React.Component{
//     // constructor(props){
//     //     super(props)
//         state={
//             persons:[]
//         }
//     }

//     componentDidMount(){
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//         .then(res=>{
//             const persons= res.data;

//             this.setState({persons});
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <p>
//                     {this.state.persons.map(per =>{
//                     //     for(let x in per)
//                     //    return per[x].value 
//                 <li> {per.name}</li> })}
//                 </p>
//             </div>
//         )
//     }
// }

// export default List