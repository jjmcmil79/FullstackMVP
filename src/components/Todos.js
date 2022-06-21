import React from 'react'
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render () {
        return(
            
            this.props.todos.map((elem) => {
                // console.log(elem)
                return <TodoItem elem={elem} key={elem.id} setSingleTodo={this.props.setSingleTodo} deleteTodo={this.props.deleteTodo}/>
            })
        )
    }
}

export default Todos