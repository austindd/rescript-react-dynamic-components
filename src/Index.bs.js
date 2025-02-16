'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$Test = require("./ExampleStyles.bs.js");
var BlinkingGreeting$Test = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$Test = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$Test = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$Test = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$Test.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(BlinkingGreeting$Test.make, {
          children: "Hello!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(ReducerFromReactJSDocs$Test.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$Test.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$Test.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
