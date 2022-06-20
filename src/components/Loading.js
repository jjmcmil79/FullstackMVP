import React from 'react'

class Loading extends React.Component {

    render () {
        return (
            <div className='Loading'>
                {this.props.loadingMessage}
            </div>
        )
    }
}

export default Loading