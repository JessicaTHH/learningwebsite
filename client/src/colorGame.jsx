const contentNode = document.getElementById('contents');

class pickSquare extends React.Component{


}

class ColorGame extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    selectedId: '',
    selectedColor: '',
    selectedColorName: '',
  };
    this.handleClick=this.handleClick.bind(this);
    this.getColor=this.getColor.bind(this);
    this.selectSquare=this.selectSquare.bind(this);
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
        selectedId: response.data._id,
        selectedColor: response.data.color,
        selectedColorName: response.data.names,
      });
      this.selectSquare();
    })
    .catch(error => {
      console.log(error);
    });
    console.log('Axios done')

  }

selectSquare(){
  console.log('selectSquare');
  const select=this.state.selectedId%2;
  console.log(select);
  return select;
}

render(){
  return(
    <div>
         <h1 style={{backgroundColor: this.state.selectedColor}}>
          The color {this.state.selectedColorName}</h1>
          <div id="stripe"><span id="message"></span><button id="next" className="nextButton"onClick={this.handleClick}>Click to start New color</button></div>
          <div style={{backgroundColor: this.state.selectedColor}} className="square" id="square_1" onClick={this.handleClick}></div>
          <div style={{backgroundColor: this.state.selectedColor}} className="square" id="square_2" onClick={this.handleClick}></div>
         <div style={{color: this.state.selectedColor}}
         className="showName">{this.state.selectedColorName}</div>
         <div className="footer" id="score">score: </div>
      </div>
)}
}

ReactDOM.render(<ColorGame />, contentNode);// Render the component inside the content Node

