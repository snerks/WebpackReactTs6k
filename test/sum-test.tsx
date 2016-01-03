/// <reference path="../typings/react/react-addons-test-utils.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />

"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";

import {Sample, SampleProps, NameView} from "../src/sum";

describe("Sample", () => {

    let sut: Sample = undefined;

    beforeEach(() => {
        let sampleProps: SampleProps = { name: "World" };

        sut = TestUtils.renderIntoDocument(<Sample {...sampleProps} />);
    });

    it("renders correct text", () => {
        let domNode: Node = ReactDOM.findDOMNode(sut);
        let textContent: string = domNode.textContent;

        expect(textContent).toBe("Hello World!");
    });

    it("renders correct className", () => {
        let sampleProps: SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<Sample {...sampleProps} />);

        const reactElement: any = shallowRenderer.getRenderOutput();

        const reactElementProps: any = reactElement.props;

        expect(reactElementProps.className).toBe("BINGO");
    });

    it("renders correct HTML Element", () => {
        let sampleProps: SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<Sample {...sampleProps} />);

        const reactElement: React.ReactElement<any> = shallowRenderer.getRenderOutput();

        console.log(reactElement.type);

        expect(reactElement.type).toBe("div");
    });
});

describe("NameView", () => {

    it("should render the correct className", () => {
        let sampleProps: SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<NameView {...sampleProps} />);

        const reactElement: any = shallowRenderer.getRenderOutput();

        const reactElementProps: any = reactElement.props;

        expect(reactElementProps.className).toBe("nameView");
    });

    it("should render the name property as text content", () => {
        let sampleProps: SampleProps = { name: "World" };

        const shallowRenderer: React.ShallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<NameView {...sampleProps} />);

        const reactElement: React.ReactElement<any> = shallowRenderer.getRenderOutput();

        const reactElementChildren: any = reactElement.props.children;

        expect(reactElementChildren[1]).toBe("World");
    });

});