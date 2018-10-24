
class Board extends react.compoment{
  render(){

         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>
           </div>
        )
    }
}



ReactDOM.render(
  <Board/>
  document.getElementById('root')
);
