import React from 'react'
import { FaPen } from "react-icons/fa"


class UpdateTodo extends React.Component {
    
    render() {
        const handleUpdateTodo = (e) => {
            console.log(this.props)
            console.log(e.target[0].value)
            const id = this.props.id
            const task = e.target[0].value;
        const jsonDate = new Date();
      
        let taskData = {
          task_content: task,
          due_date: jsonDate,
          completed: "false",
        };
        let string = JSON.stringify(taskData)
        
        this.props.updateTodo(string, id)
        
        }
        
        return(
            <div>
                <h3>To Update your todo type below:</h3>
                <form id="update-todo-form" onSubmit={handleUpdateTodo}>
                    <input 
                        type="text" 
                        name="update-todo-input" 
                        id="update-todo-input" 
                         />
                    <FaPen 
                        type="submit"
                        id="update-todo-submit"
                        className='update-submit' 
                        value="Update todo" />
                </form>
          </div>
        )
    }
}

export default UpdateTodo