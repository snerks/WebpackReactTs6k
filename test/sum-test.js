/// <reference path="../typings/react/react-addons-test-utils.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />
"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
// import Sample = require("./sum");
var sum = require("../src/sum");
describe("Sample", function () {
    // let component: React.Component<any, any> = undefined;
    var sut = undefined;
    beforeEach(function () {
        var sampleProps = { name: "World" };
        sut = TestUtils.renderIntoDocument(React.createElement(sum.Sample, React.__spread({}, sampleProps)));
    });
    it("renders correct text", function () {
        var domNode = ReactDOM.findDOMNode(sut);
        var textContent = domNode.textContent;
        expect(textContent).toBe("Hello World!");
    });
    it("renders correct className", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum.Sample, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        var reactElementProps = reactElement.props;
        expect(reactElementProps.className).toBe("BINGO");
    });
    it("renders correct HTML Element", function () {
        var sampleProps = { name: "World" };
        var shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(sum.Sample, React.__spread({}, sampleProps)));
        var reactElement = shallowRenderer.getRenderOutput();
        console.log(reactElement.type);
        expect(reactElement.type).toBe("div");
    });
});
