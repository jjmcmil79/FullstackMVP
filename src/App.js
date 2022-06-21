import React from 'react'
import Loading from './components/Loading'
import Todos from './components/Todos'
import SingleTodo from './components/SingleTodo'
import CreateTodo from './components/CreateTodo'
import Weather from './components/Weather'
import UpdateTodo from './components/UpdateTodo'


class App extends React.Component {
  constructor(props){
  super(props)
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading....',
      weatherData: null
    }
  }

componentDidMount() {
  fetch('http://localhost:8001/api/tasks')
  .then((response) => response.json())
  .then((data) => this.setState({todos: data, loading: false}))

  
}
render () {

  // const getWeather = () => {
  //   const API_Key = "705b7e2bf903340ad3d67654088d5536"
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?zip=76544,US&appid=${API_Key}`)
  //   .then((response) => response.json())
  //   .then((data) => this.setState({weatherData: data, loading: false}))
  //   console.log(this.state.weatherData)
  // }

  const deleteTodo = (id) => {
    console.log(id)
    this.state.loading = this.setState({loading: true, loadingMessage: 'Deleting the task...'})
    fetch(
      `http://localhost:8001/api/delete/${id}`,
      {
        method: "DELETE",
        
      })
    .then((response) => response.json())
    this.setState({loading: false})
    // console.log(this.state)
    window.location.reload()
  }

  const createTodo = (taskData) => {
    console.log(taskData)
    this.state.loading = this.setState({loading: true, loadingMessage: 'Adding to your todo list...'})
    fetch(
      "http://localhost:8001/api/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: taskData,
      })
    .then((response) => response.json())
    this.setState({loading: false})
    // console.log(this.state)
    
  }

  const updateTodo = (taskData, id) => {
    // console.log(taskData)
    this.state.loading = this.setState({loading: true, loadingMessage: 'Updating your todo list...'})
    fetch(
      `http://localhost:8001/api/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: taskData,
      })
    .then((response) => response.json())
    this.setState({loading: false})
    // console.log(this.state)
  }
  const setSingleTodo = (e) => {
    this.state.loading = this.setState({loading: true, loadingMessage: 'Getting single todo...'})
    fetch(`http://localhost:8001/api/tasks/${e.target.id}`)
    .then((response) => response.json())
    .then((data) => this.setState({singleTodo: data, loading: false}))
    console.log(this.state)
  }
  const clearSingleTodo = () => {
    this.setState({singleTodo: null})
  }

  if (this.state.loading) {
   return( <Loading loadingMessage={this.state.loadingMessage}/> )
  }

  if(this.state.singleTodo) {
  return (
    <SingleTodo singleTodo={this.state.singleTodo} clearSingleTodo={clearSingleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    )
  } 
  else {
    return (
      <div className='newTodo'>
        <h1 className='mainheader'>React Todo App</h1>
          <CreateTodo createTodo={createTodo}/>
    <div>
      {/* <Weather getWeather={this.state.weatherData} /> */}
      <Todos todos={this.state.todos} setSingleTodo={setSingleTodo}/>
    
    </div>
    </div>
    )
  }
//   if (this.state.todoData){
//     return(
//     <CreateTodo todoData={this.state.todoData} createTodo={createTodo} />

//   )
// }
}

}
export default App;
