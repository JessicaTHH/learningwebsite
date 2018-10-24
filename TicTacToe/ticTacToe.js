class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const title = 'Learning website';
    const score='score: ';

    return (
      <div>
        <div className="space">{title}</div>
        <div className="board-row">
          {this.renderSquare(0)}
        </div>
        <div className="space"></div>
        <div className="board-row">
          {this.renderSquare(1)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
        </div>
        <div>{score}</div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
