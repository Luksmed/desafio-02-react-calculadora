import React, {Component} from 'react'
import "./App.css"

class App extends Component{
  
state = {
  n1: '',
  n2: '',
  result: ''
}

handleChange = (event) => {
  this.setState({
    n1: Number(event.target.value)
  })
}

handleChangeTwo = (event) => {
  this.setState({
    n2: Number(event.target.value)
  })
}

add = () => {
  if (this.state.n1 && this.state.n2 != '') {
  this.setState({
    result: this.state.n1 + this.state.n2,
    operador: '+'
   })
  }
}

minus = () => {
  let {n1,n2} = this.state
  if (n1 && n2 != '') {
  this.setState({
    result: n1 - n2,
    operador: '-'
   })
  }
}

mult = () => {
  let {n1,n2} = this.state
  if (n1 && n2 != '') {
  this.setState({
    result: n1 * n2,
    operador: '*'
   })
  }
}

divide = () => {
  let {n1,n2} = this.state
  if (n1 && n2 != '') {
  this.setState({
    result: n1 / n2,
    operador: '/'
   })
  }
}

reset = () => {
    this.setState({
      n1: '',
      n2: '',
      result: '',
      operador: ''      
    })
  }

  render(){
    return(
      <div className='fundo'>
        <div className='box1'>
          <div className='title'>
            <h1>React App Calculadora</h1>
          </div>        
          <div className='box2'>
            <input onChange={this.handleChange} value={this.state.n1} type="number"/>
            <p>{this.state.operador}</p>
            <input onChange={this.handleChangeTwo} value={this.state.n2} type="number"/>    
          </div>
          <div className='box3'>      
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <button onClick={this.mult}>*</button>
            <button onClick={this.divide}>/</button>
            <button onClick={this.reset}>C</button> 
          </div>
          <div className='final'>
            <h2>{this.state.result}</h2>
          </div>
        </div>
      </div>
    )
  }
}
export default App
