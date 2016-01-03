var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Sample = (function (_super) {
    __extends(Sample, _super);
    function Sample() {
        _super.apply(this, arguments);
    }
    Sample.prototype.render = function () {
        return (React.createElement("div", {"className": "BINGO"}, "Hello ", this.props.name, "!"));
    };
    return Sample;
})(React.Component);
exports.Sample = Sample;
exports.NameView = function (props) { return React.createElement("div", {"className": "nameView"}, "Hello, ", props.name); };
// export const NameView: any = ({name}) => <div className="nameView">Hello, {name}</div>;
//# sourceMappingURL=sum.js.map