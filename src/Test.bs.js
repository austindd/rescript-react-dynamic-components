'use strict';

var React = require("react");

function Template(T) {
  return T;
}

function template(component) {
  return {
          component: component
        };
}

function Test$CompA(Props) {
  var className = Props.className;
  var styles = Props.styles;
  var children = Props.children;
  return React.createElement("div", {
              className: className,
              style: styles
            }, children);
}

var CompA = {
  make: Test$CompA
};

var compA = template(Test$CompA);

exports.Template = Template;
exports.template = template;
exports.CompA = CompA;
exports.compA = compA;
/* compA Not a pure module */
