import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPen, FaTrash, FaCheck } from "react-icons/fa"
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

class ItemButtons extends React.Component {
    render () {
        const handleDeleteTodo = (e) => {
         this.props.deleteTodo(e)
        }
        const handleUpdateTodo = (e) => {
            let todo = this.props.todo
            todo.removeAttribute("readonly")
            todo.focus()
            this.props.updateTodo(e)
        }

        return (
            <div>
                
                <FaPen className='edit-icon' type= "edit" id={this.props.id} onClick={handleUpdateTodo}/>
                <FaTrash className='delete-btn' id={this.props.id} onClick={handleDeleteTodo}/>
                <FaCheck className='complete-btn' onClick={this.props.clearSingleTodo}/>
                
            </div>
        )
    }
}

export default ItemButtons