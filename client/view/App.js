"use strict";

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
      colors: ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 230, 0)", "rgb(0, 0, 255)", "rgb(0, 0, 0)"],
      selectedColor: '',
      names: ["red", "yellow", "white", "green", "blue", "black"],
      selectedColorName: ''
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(LearnColor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._getRandomColor();
      console.log('componentDidMount');
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      console.log("you clicked");
      this._getRandomColor();
    }
  }, {
    key: "_getRandomColor",
    value: function _getRandomColor() {
      console.log('getRamdomColor');
      var random = Math.floor(Math.random() * this.state.colors.length);
      var item = this.state.colors[random];
      var itemName = this.state.names[random];
      this.setState({
        selectedColor: item,
        selectedColorName: itemName
      });
      console.log('getRamdomColor Done ' + item + " " + itemName);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { style: { backgroundColor: this.state.selectedColor } },
          "Learn color ",
          this.state.selectedColorName
        ),
        React.createElement("div", { style: { backgroundColor: this.state.selectedColor }, className: "circle", onClick: this.handleClick }),
        React.createElement(
          "div",
          { style: { color: this.state.selectedColor },
            className: "showName" },
          this.state.selectedColorName
        )
      );
    }
  }]);

  return LearnColor;
}(React.Component);

ReactDOM.render(React.createElement(LearnColor, null), contentNode); // Render the component inside the content Node