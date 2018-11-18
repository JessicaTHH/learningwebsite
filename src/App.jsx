const contentNode = document.getElementById('contents');



class LearnColor extends React.Component {

  render() {
    return (
      <div>
        <h1>Learn the color</h1>
          <div id="container">
            <div className="square"></div>
          </div>
      </div>
); }
}

ReactDOM.render(<LearnColor />, contentNode);// Render the component inside the content Node

