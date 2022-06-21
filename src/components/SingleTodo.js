import React from 'react'
import Button from './Button'

class SingleTodo extends React.Component {

    render() {
        console.log(this.props.singleTodo)
        const singleTodo = this.props.singleTodo[0]
        return (
            <div className='singleTodoItem' id={singleTodo.id}>
                <h1> {singleTodo.task_content} </h1>
                {/* <p>UserID: {this.props.singleTodo.userId}</p> */}
                <Button singleTodo={singleTodo} id={singleTodo.id} clearSingleTodo={this.props.clearSingleTodo} deleteTodo={this.props.deleteTodo} todo={this.props.task_content}/>
                {/* <FaTrash className='delete-btn' id={this.props.id} onClick={handleDeleteTodo}/> */}
            </div>
        )
    }

}

export default SingleTodo