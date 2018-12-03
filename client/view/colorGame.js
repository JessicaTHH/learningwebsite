'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var pickSquare = function (_React$Component) {
  _inherits(pickSquare, _React$Component);

  function pickSquare() {
    _classCallCheck(this, pickSquare);

    return _possibleConstructorReturn(this, (pickSquare.__proto__ || Object.getPrototypeOf(pickSquare)).apply(this, arguments));
  }

  return pickSquare;
}(React.Component);

var ColorGame = function (_React$Component2) {
  _inherits(ColorGame, _React$Component2);

  function ColorGame(props) {
    _classCallCheck(this, ColorGame);

    var _this2 = _possibleConstructorReturn(this, (ColorGame.__proto__ || Object.getPrototypeOf(ColorGame)).call(this, props));

    _this2.state = {
      selectedId: '',
      selectedColor: '',
      selectedColorName: ''
    };
    _this2.handleClick = _this2.handleClick.bind(_this2);
    _this2.getColor = _this2.getColor.bind(_this2);
    _this2.selectSquare = _this2.selectSquare.bind(_this2);
    return _this2;
  }

  _createClass(ColorGame, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getColor();

      console.log('componentDidMount');
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      console.log("you clicked");
      this.getColor();
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      var _this3 = this;

      axios.get('/color').then(function (response) {
        console.log("im here");
        console.log(response);
        _this3.setState({
          selectedId: response.data._id,
          selectedColor: response.data.color,
          selectedColorName: response.data.names
        });
        _this3.selectSquare();
      }).catch(function (error) {
        console.log(error);
      });
      console.log('Axios done');
    }
  }, {
    key: 'selectSquare',
    value: function selectSquare() {
      console.log('selectSquare');
      var select = this.state.selectedId % 2;
      console.log(select);
      return select;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { style: { backgroundColor: this.state.selectedColor } },
          'The color ',
          this.state.selectedColorName
        ),
        React.createElement(
          'div',
          { id: 'stripe' },
          React.createElement('span', { id: 'message' }),
          React.createElement(
            'button',
            { id: 'next', className: 'nextButton', onClick: this.handleClick },
            'Click to start New color'
          )
        ),
        React.createElement('div', { style: { backgroundColor: this.state.selectedColor }, className: 'square', id: 'square_1', onClick: this.handleClick }),
        React.createElement('div', { style: { backgroundColor: this.state.selectedColor }, className: 'square', id: 'square_2', onClick: this.handleClick }),
        React.createElement(
          'div',
          { style: { color: this.state.selectedColor },
            className: 'showName' },
          this.state.selectedColorName
        ),
        React.createElement(
          'div',
          { className: 'footer', id: 'score' },
          'score: '
        )
      );
    }
  }]);

  return ColorGame;
}(React.Component);

ReactDOM.render(React.createElement(ColorGame, null), contentNode); // Render the component inside the content Node