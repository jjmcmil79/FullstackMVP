import React from 'react'
import Button from './Back'
import Delete from './Delete';
import Back from './Back';
import Moment from 'react-moment';
import 'moment-timezone';

class SingleTodo extends React.Component {

    render() {
        console.log(this.props)
        const singleTodo = this.props.singleTodo[0]
        
        
        // const click = () => {
        //     const audio = new Audio("./public/buttonclick.mp3")
        //     audio.play()
        // }
        return (
            <div className='singleTodoItem' id={singleTodo.id}>
               
                <h1> {singleTodo.task_content} </h1>
                <p>Date Entered: <Moment>{singleTodo.due_date}</Moment></p>
                {/* <Button singleTodo={singleTodo} click={click} id={singleTodo.id} clearSingleTodo={this.props.clearSingleTodo} todo={this.props.task_content}/> */}
                <div className='buttons'>
                <Delete className='delete-btn' singleTodo={singleTodo} id={singleTodo.id} deleteTodo={this.props.deleteTodo}/>
                <Back className='back-btn' singleTodo={singleTodo} id={singleTodo.id} clearSingleTodo={this.props.clearSingleTodo}/>
                </div>
            </div>
        )
    }

}

export default SingleTodo