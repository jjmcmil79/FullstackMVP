import React from 'react'

class CreateTodo extends React.Component {
    
    render() {
        const handleCreateTodo = (e) => {
            
            console.log(e.target[0].value)

            const task = e.target[0].value;
        const jsonDate = new Date();
      
        let taskData = {
          task_content: task,
          due_date: jsonDate,
          completed: "false",
        };
        let string = JSON.stringify(taskData)
        this.props.createTodo(string)
        }
        
        return(
            <form id="new-todo-form" onSubmit={handleCreateTodo}>
                    <input 
                        type="text" 
                        name="new-todo-input" 
                        id="new-todo-input" 
                        placeholder="What do you have planned?" />
                    <input 
                        type="submit"
                        id="new-todo-submit" 
                        value="Add todo" />
          </form>
        )
    }
}

export default CreateTodo