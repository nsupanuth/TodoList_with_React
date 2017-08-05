import React,{Component} from 'react'

class Header extends Component{

    render(){
        const baseStyle = {
            fontWeight : 'bold',
            fontSize : '20px'
        }

        return (
            <div style = {baseStyle}>
                Todo List
            </div>
        );
    }

}

export default Header;