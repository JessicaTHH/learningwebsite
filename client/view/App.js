'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var LearnColor = function (_React$Component) {
  _inherits(LearnColor, _React$Component);

  function LearnColor(props) {
    _classCallCheck(this, LearnColor);

    var _this = _possibleConstructorReturn(this, (LearnColor.__proto__ || Object.getPrototypeOf(LearnColor)).call(this, props));

    _this.state = {
      selectedColor: '',
      selectedColorName: ''
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.getColor = _this.getColor.bind(_this);
    return _this;
  }

  _createClass(LearnColor, [{
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
      var _this2 = this;

      axios.get('/color').then(function (response) {
        console.log("im here");
        console.log(response);
        _this2.setState({
          selectedColor: response.data.color,
          selectedColorName: response.data.names
        });
      }).catch(function (error) {
        console.log(error);
      });
      console.log('Axios done');
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
          'Learn color ',
          this.state.selectedColorName
        ),
        React.createElement('div', { style: { backgroundColor: this.state.selectedColor }, className: 'circle', onClick: this.handleClick }),
        React.createElement(
          'div',
          { style: { color: this.state.selectedColor },
            className: 'showName' },
          this.state.selectedColorName
        )
      );
    }
  }]);

  return LearnColor;
}(React.Component);

ReactDOM.render(React.createElement(LearnColor, null), contentNode); // Render the component inside the content Node