import React from 'react'
import Button from './Back'
import Delete from './Delete';
import Back from './Back';
import Moment from 'react-moment';
import 'moment-timezone';
import UpdateTodo from './UpdateTodo';

class SingleTodo extends React.Component {

    render() {
        console.log(this.props)
        const singleTodo = this.props.singleTodo[0]
        
        
       
        return (
            <div className='singleTodoItem' id={singleTodo.id}>

                
                <h2> {singleTodo.task_content} </h2>
                <p>Date Entered: <Moment>{singleTodo.due_date}</Moment></p>
                
                <div className='buttons'>
                <Delete className='delete-btn' singleTodo={singleTodo} id={singleTodo.id} deleteTodo={this.props.deleteTodo}/>
                <Back className='back-btn' singleTodo={singleTodo} id={singleTodo.id} clearSingleTodo={this.props.clearSingleTodo}/>
                
                </div>

                <UpdateTodo className='update-btn' singleTodo={singleTodo} id={singleTodo.id} updateTodo={this.props.updateTodo}/>
            </div>
        )
    }

}

export default SingleTodo