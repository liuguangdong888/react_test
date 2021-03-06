import React from 'react'
import {BrowserRouter} from 'react-router-dom'
class Login extends React.Component{
    state={
        arr:[{name:"刘冬",age:24,address:"河南罗山"},{name:"刘国庆",age:22,address:"河南罗山"},{name:"刘光绪",age:10,address:"河南罗山"}],
        num:10,
        store:100
    }
    fn=()=>{
        return this.state.arr.map((item,index)=>{
            return (
                <ul key={index}>
                    <li >{item.name}</li>
                    <li >{item.age}</li>
                    <li >{item.address}</li>                   
                </ul>
            )
        })
    }
    render(){
        return(
        <BrowserRouter>
            <div>
                 {this.fn()}
            </div>
        </BrowserRouter>
        )
    }
}
export default Login