/// <reference path="../typings/react/react-addons-test-utils.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var ReactDOMServer = require("react-dom/server");
var sum_1 = require("../src/sum");
describe("Sample", function () {
    var sut = undefined;
    beforeEach(function () {
        var sampleProps = { name: "World" };
        sut = TestUtils.renderIntoDocument(React.createElement(sum_1.Sample, React.__spread({}, sampleProps)));
    });
    it("renders correct text", function () {
        var domNode = ReactDOM.findDOMNode(sut);
        var textContent = domNode.textContent;
        expect(textContent).toBe("Hello World!");
    });
    it("renders correct className", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum_1.Sample, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        var reactElementProps = reactElement.props;
        expect(reactElementProps.className).toBe("BINGO");
    });
    it("renders correct HTML Element", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum_1.Sample, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        console.log(reactElement.type);
        expect(reactElement.type).toBe("div");
    });
});
describe("NameView", function () {
    it("should render the correct className", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum_1.NameView, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        var reactElementProps = reactElement.props;
        expect(reactElementProps.className).toBe("nameView");
    });
    it("should render the name property as text content", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum_1.NameView, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        var reactElementChildren = reactElement.props.children;
        expect(reactElementChildren[1]).toBe("World");
    });
    it("should render the name property within text content", function () {
        var sampleProps = { name: "World" };
        var renderedString = ReactDOMServer.renderToStaticMarkup(React.createElement(sum_1.NameView, React.__spread({}, sampleProps)));
        expect(renderedString).toBe("<div class=\"nameView\">Hello, World</div>");
    });
});
