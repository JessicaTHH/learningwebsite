
class Board extends react.compoment{
  render(){

         return (
             <h1>Hello {this.state.message}</h1>

            <button onClick={this.updateMessage}>Click me!</button>
           
        )
    }
}



ReactDOM.render(
  <Board/>
  document.getElementById('root')
);
