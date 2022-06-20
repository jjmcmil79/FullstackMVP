import React from 'react'
import Loading from './components/Loading'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'

class App extends React.Component {
  constructor(props){
  super(props)
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading....'
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((data) => this.setState({todos: data, loading: false}))

  
}
render () {

  const setSingleTodo = (e) => {
    this.state.loading = this.setState({loading: true, loadingMessage: 'Getting single todo...'})
    fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
    .then((response) => response.json())
    .then((data) => this.setState({singleTodo: data, loading: false}))

  }
  const clearSingleTodo = () => {
    this.setState({singleTodo: null})
  }

  if (this.state.loading) {
   return( <Loading loadingMessage={this.state.loadingMessage}/> )
  }
  return (
    this.state.singleTodo ? <SingleTodo singleTodo={this.state.singleTodo} clearSingleTodo={clearSingleTodo}/> : <Todos todos={this.state.todos} setSingleTodo={setSingleTodo}/>
 
  )
}

}
export default App;
