import React from 'react'
import { FaTrash} from "react-icons/fa"

class Delete extends React.Component {
    render () {


        const handleDeleteTodo = (e) => {
            let id = this.props.id
            this.props.deleteTodo(id)
            console.log(id)
            
           }



        return (
            <div>
                
                <FaTrash className='delete' id={this.props.id} onClick={handleDeleteTodo}/>
                
            </div>
        )
    }
}

export default Delete