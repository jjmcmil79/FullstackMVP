import React from 'react'
import { FaPen } from "react-icons/fa"

class Update extends React.Component {
    render () {


        return (
            <div>
                <FaPen className='edit'  id={this.props.id} onClick={handleUpdateTodo}/>
            </div>
        )
    }
}

export default Update