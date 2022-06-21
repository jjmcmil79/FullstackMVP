
import React from 'react'
import {FaArrowLeft } from "react-icons/fa"

class Back extends React.Component {
    render () {
        return (
            <div>
                <FaArrowLeft id='back' onClick={this.props.clearSingleTodo}/>
            </div>
        )
    }
}

export default Back