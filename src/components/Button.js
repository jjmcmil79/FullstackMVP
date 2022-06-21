// import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FaPen, FaTrash, FaCheck, FaArrowLeft } from "react-icons/fa"

class Button extends React.Component {
    render () {


        const handleDeleteTodo = (e) => {
            let id = this.props.id
            this.props.deleteTodo(id)
            console.log(this.props)
           }


        const handleUpdateTodo = (e) => {
        //     console.log(e)

        //     const task = e.target[0].value;
        // const jsonDate = new Date();
      
        // let taskData = {
        //   task_content: task,
        //   due_date: jsonDate,
        //   completed: "false",
        // };
        // let string = JSON.stringify(taskData)
        // this.props.updateTodo(string)

        return(
            <form id="update-todo-form" onSubmit={handleUpdateTodo}>
                    <input 
                        type="text" 
                        name="update-todo-input" 
                        id="update-todo-input" 
                         />
                    <input 
                        type="submit"
                        id="update-todo-submit" 
                        value="Update todo" />
          </form>
        )
        }
        
               
            // let todo = this.props.singleTodo.task_content
            //    console.log(todo)
            // //    todo.removeAttribute("readonly")
            // //    todo.focus()
            //    this.props.updateTodo(e)
           

        return (
            <div>
                <FaPen className='edit-icon'  id={this.props.id} onClick={handleUpdateTodo}/>
                <FaTrash className='delete-btn' id={this.props.id} onClick={handleDeleteTodo}/>
                <FaCheck className='complete-btn' onClick={this.props.clearSingleTodo}/>
                <FaArrowLeft className='back-btn' onClick={this.props.clearSingleTodo}/>
            </div>
        )
    }
}

export default Button