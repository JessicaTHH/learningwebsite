const contentNode = document.getElementById('contents');

class LearnColor extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    colors: [
      "rgb(255, 0, 0)",
      "rgb(255, 255, 0)",
      "rgb(255, 255, 255)",
      "rgb(0, 230, 0)",
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
    ],
    selectedColor: '',
    names: ["red","yellow","white","green","blue","black"],
    selectedColorName: '',
  };
    this.handleClick=this.handleClick.bind(this);
}
  
componentDidMount() {
  this._getRandomColor();
  console.log('componentDidMount');
  
}

handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  this._getRandomColor();
}

_getRandomColor(){
  console.log('getRamdomColor');
  var random=(Math.floor(Math.random()*this.state.colors.length));
  var item = this.state.colors[random];
  var itemName=this.state.names[random];
  this.setState({
    selectedColor: item,
    selectedColorName: itemName,
  }) ;
  console.log('getRamdomColor Done '+item+" "+itemName);
}

render(){
  return(
    <div>
         <h1 style={{backgroundColor: this.state.selectedColor}}>
          Learn color {this.state.selectedColorName}</h1>
          <div style={{backgroundColor: this.state.selectedColor}}                className="circle" onClick={this.handleClick}></div>
         <div style={{color: this.state.selectedColor}}
         className="showName">{this.state.selectedColorName}</div>
      </div>
)}
}

ReactDOM.render(<LearnColor />, contentNode);// Render the component inside the content Node

