import React from 'react'

class Button extends React.Component {
    render () {
        return (
            <div>
                <button className='button' onClick={this.props.clearSingleTodo}>Back</button>
            </div>
        )
    }
}

export default Button