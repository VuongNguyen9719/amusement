import React, { Component } from "react";
import PropTypes from "prop-types";
import helper from "~helper";

class Button extends Component {
    constructor(props) {
        super(props);
        const id = this.props.id || "btn_" + helper.getUniqueString();
        this.state = {
            id: id,
        };
    }

    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string,
    };

    static defaultProps = {
        id: "",
        text: "Button",
        onClick: () => {},
        className: "",
    };

    render() {
        var self = this;
        const classList = ["btn"];

        if (self.props.className) classList.push(self.props.className);

        if (self.props.disabled) {
            classList.push("disabled");

            return (
                <button id={self.state.id} className={classList.join(" ")} data-tooltip={self.props.dataTooltip ? self.props.dataTooltip : null}>
                    {self.props.icon && typeof self.props.icon == "string" ? <i className={"icon " + self.props.icon} aria-hidden="true" /> : self.props.icon}
                    {self.props.text}
                </button>
            );
        } else {
            return (
                <button
                    id={self.state.id}
                    className={classList.join(" ")}
                    data-tooltip={self.props.dataTooltip ? self.props.dataTooltip : null}
                    onClick={self.props.onClick}
                    title={self.props.title ? self.props.title : ""}
                    style={self.props.style}
                >
                    {self.props.icon && typeof self.props.icon == "string" ? <i className={"icon " + self.props.icon} aria-hidden="true" /> : self.props.icon}
                    {self.props.text}
                </button>
            );
        }
    }
}

export default Button;
