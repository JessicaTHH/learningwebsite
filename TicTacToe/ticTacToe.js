class QuizUI extends React.Component {
  render() {
    const col1="column1";
    const col2="column2";
    const scr="score:";
    return (
      <div>
        <div className="space"></div>
        <div className="column1">
        {col1}
        </div>
        <div className="space"></div>
        <div className="column2">
        {col2}
        </div>
        <div className="footer">
        {scr}
        </div>
         <div className="space"></div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <QuizUI />,
  document.getElementById('root')
);
