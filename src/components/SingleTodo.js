import React from 'react'
import Button from './Button'

class SingleTodo extends React.Component {

    render() {
        return (
            <div className='singleTodoItem' id={this.props.singleTodo.id}>
                <h1> {this.props.singleTodo.title} </h1>
                <p>UserID: {this.props.singleTodo.userId}</p>
                <Button clearSingleTodo={this.props.clearSingleTodo}/>
            </div>
        )
    }

}

export default SingleTodo