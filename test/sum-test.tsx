/// <reference path="../typings/react/react-addons-test-utils.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />

"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";

// import Sample = require("./sum");
import sum = require("../src/sum");

describe("Sample", () => {

    // let component: React.Component<any, any> = undefined;
    let sut: sum.Sample = undefined;

    beforeEach(() => {
        let sampleProps: sum.SampleProps = { name: "World" };

        sut = TestUtils.renderIntoDocument(<sum.Sample {...sampleProps} />);
    });

    it("renders correct text", () => {
        let domNode: Node = ReactDOM.findDOMNode(sut);
        let textContent: string = domNode.textContent;

        expect(textContent).toBe("Hello World!");
    });

    it("renders correct className", () => {
        let sampleProps: sum.SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<sum.Sample {...sampleProps} />);

        const reactElement: any = shallowRenderer.getRenderOutput();

        const reactElementProps: any = reactElement.props;

        expect(reactElementProps.className).toBe("BINGO");
    });

    it("renders correct HTML Element", () => {
        let sampleProps: sum.SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<sum.Sample {...sampleProps} />);

        const reactElement: React.ReactElement<any> = shallowRenderer.getRenderOutput();

        console.log(reactElement.type);

        expect(reactElement.type).toBe("div");
    });
});