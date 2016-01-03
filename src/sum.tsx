import * as React from "react";

export interface SampleProps extends React.Props<any> {
    name: string;
}

export class Sample extends React.Component<SampleProps, {}> {
    render(): JSX.Element {
        return (
            <div className={"BINGO"}>Hello { this.props.name }!</div>
            );
    }
}