import React from 'react'


class UpdateTodo extends React.Component {
    
    render() {
        const handleUpdateTodo = (e) => {
            
            console.log(e.target[0].value)

            const task = e.target[0].value;
        const jsonDate = new Date();
      
        let taskData = {
          task_content: task,
          due_date: jsonDate,
          completed: "false",
        };
        let string = JSON.stringify(taskData)
        this.props.updateTodo(string)
        }
        
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
}

export default UpdateTodo