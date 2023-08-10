import React, { Component } from "react";
import PropTypes from "prop-types";
import helper from "@helper";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        const id = this.props.id || "checkbox_" + helper.getUniqueString();
        this.state = {
            id: id,
            checked: !!this.props.checked,
        };
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        labelText: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        className: PropTypes.string,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        id: "",
        name: "",
        labelText: "",
        disabled: false,
        value: "",
        className: "",
        onChange: function () {
            //empty function
        },
    };

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.checked != "undefined" && nextProps.checked != this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    onClick = (e) => {
        var self = this;
        this.setState({ checked: !this.state.checked }, function () {
            self.props.onChange(self.state.checked, e);
        });
    };
    render() {
        const id = this.state.id;
        if (!this.props.disabled) {
            return (
                <span className={"ims-checkbox " + this.props.className}>
                    <input type="checkbox" id={id} checked={this.state.checked} name={this.props.name} value={this.props.value} />
                    <label className="checkbox-label" htmlFor={id} onClick={this.onClick} title={this.props.title ? this.props.title : this.props.labelText}>
                        {this.props.labelText}
                    </label>
                </span>
            );
        } else {
            return (
                <span className={"ims-checkbox " + this.props.className}>
                    <input type="checkbox" id={id} checked={this.state.checked} disabled name={this.props.name} value={this.props.value} />
                    <label className="checkbox-label" htmlFor={id} title={this.props.title ? this.props.title : this.props.labelText}>
                        {this.props.labelText}
                    </label>
                </span>
            );
        }
    }
}

export default Checkbox;
