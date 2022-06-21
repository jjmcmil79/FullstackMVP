import React from 'react'
import ItemButtons from './ItemButtons'

class TodoItem extends React.Component {

    render () {
        const handleSetSingleTodo = (e) => {
            this.props.setSingleTodo(e)
            console.log(e)
        }
        const handleInputChange = (e) => {
            let input = e.target;
            let name = e.target.name;
            let value = input.value;
        
            this.setState({
              [name]: value,
            });
          };
        return (
            <div className='todo'>
            <div className='todoItem' id={this.props.elem.id} onClick={handleSetSingleTodo}>{this.props.elem.task_content}</div>
            {/* <div><ItemButtons id={this.props.elem.id} deleteTodo={this.props.deleteTodo} todo={this.props.elem.task_content}/></div> */}
            </div>
        )
    }
}

export default TodoItem