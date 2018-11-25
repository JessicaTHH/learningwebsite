const contentNode = document.getElementById('contents');

class LearnColor extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    selectedColor: '',
    selectedColorName: '',
  };
    this.handleClick=this.handleClick.bind(this);
    this.getColor=this.getColor.bind(this);
}
  
componentDidMount() {
  this.getColor();
  console.log('componentDidMount');
}

handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  this.getColor();
}

getColor() {
    axios.get('/color')
    .then(response => {
      console.log("im here")
      console.log(response)
      this.setState({ 
        selectedColor: response.data.color,
        selectedColorName: response.data.names,
      });
    })
    .catch(error => {
      console.log(error);
    });
    console.log('Axios done')
  }

render(){
  return(
    <div>
         <h1 style={{backgroundColor: this.state.selectedColor}}>
          Learn color {this.state.selectedColorName}</h1>
          <div style={{backgroundColor: this.state.selectedColor}}className="circle" onClick={this.handleClick}></div>
         <div style={{color: this.state.selectedColor}}
         className="showName">{this.state.selectedColorName}</div>
      </div>
)}
}

ReactDOM.render(<LearnColor />, contentNode);// Render the component inside the content Node

