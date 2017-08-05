import React, { Component } from 'react'
import Header from './Header.jsx'

class App extends Component {

  state = {
     todos : []
  }  

  render() {

    const { todos } = this.state

    return (    
        <div className="box">
            <Header/>
            <div className="field has-addons">
                <div className = "control">
                    <input ref = "todo" className = "input" 
                    onKeyPress = {(e) => { (e.key === 'Enter') ? this.handleClick() : null }} type="text"/>
                </div>
                <div className ="control">
                    <a onClick = {() => this.handleClick()} className ="button is-success">Add</a>
                </div>
            </div>
        
            { todos.map((todo,index)=>{
                       return  <div className = "box" key = {index}>
                                    <div className="columns">
                                        <div className="column">
                                            { todo }
                                        </div>

                                        <div className="column">

                                        </div>

                                        <div className="column">
                                            <a onClick = {() => this.handleClickDelete({index})} 
                                               className="button is-danger">
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                    
                                    
                               </div>
            })}

        </div>
    );
  }

  handleClick(){
    const { todos } = this.state
    const todoItem = this.refs.todo.value
    todos.push(todoItem)
    this.setState({
        todos : todos
    })
    this.refs.todo.value = ""
  }

  handleClickDelete(index){
      const { todos } = this.state
      const i = index.index;
      todos.splice(i,1)
      this.setState({
        todos : todos
    })
  }


}

export default App;
