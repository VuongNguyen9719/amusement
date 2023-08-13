
import React, { Component, Fragment } from 'react';
import SvgIcon from './SvgIcon';
import helper from '@helper';
import PropTypes from 'prop-types';

class Input extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        inputRef: PropTypes.func,
        placeholder: PropTypes.string,
        autoComplete: PropTypes.oneOf(['on', 'off']),
        readOnly: PropTypes.bool,
        allowHtml: PropTypes.bool,
        value: PropTypes.string,
        className: PropTypes.string,
        inputClassName: PropTypes.string,
        iconClassName: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        validator: PropTypes.func,
        maxLength: PropTypes.number,
        icon: PropTypes.element,
    };

    static defaultProps = {
        id: '',
        type: 'text',
        name: '',
        placeholder: '',
        autoComplete: 'off',
        autoFocus: false,
        readOnly: false,
        style: {},
        allowHtml: false,
        onChange: function (newVal) {},
        onFocus: function () {},
        onBlur: function () {},
        validator: function (value) {},
        inputRef: function (e) {},
    };

    constructor(props) {
        super(props);
        const id = this.props.id || 'input_' + helper.getUniqueString();
        let _value = '';
        if (typeof this.props.value != 'undefined' && this.props.value) {
            _value = this.props.value;
        } else if (typeof this.props.defaultValue != 'undefined' && this.props.defaultValue) {
            _value = this.props.defaultValue;
        }

        this.state = {
            id: id,
            invalidMessage: '',
            characters: _value.length,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (
            typeof this.props.value != 'undefined' &&
            typeof nextProps.value != 'undefined' &&
            this.props.value != nextProps.value
        ) {
            this.setState({ characters: nextProps.value.length });
        } else if (
            typeof this.props.defaultValue != 'undefined' &&
            typeof nextProps.defaultValue != 'undefined' &&
            this.props.defaultValue != nextProps.defaultValue
        ) {
            this.setState({ characters: nextProps.defaultValue.length });
        }
    }

    handleOnChange = (e) => {
        var value = e.target.value;
        // value = value.replace(/[^a-z](on[a-z]+\s*=\s*([^\s>]+))/gi, ""); // fix bug xss
        if (!this.props.allowHtml && helper.isHTMLContent(value)) {
            this.setState({
                invalidMessage: 'Vui lòng không nhập mã HTML.',
                characters: value.length,
            });
            return;
        }

        if (typeof this.props.validator == 'function') {
            var warning = this.props.validator(e.target.value) || '';
            if (warning && warning != '') {
                this.props.onChange(value, e);
                this.setState({ invalidMessage: warning, characters: value.length });
                return;
            }
        }

        this.props.onChange(value, e);
        this.setState({ invalidMessage: '', characters: value.length });
    };

    onBlur = (e) => {
        if (e.target.hasAttribute('required') && e.target.value == '') {
            e.target.classList.remove('invalid');
            //e.target.focus();
            this.setState({
                invalidMessage: this.props.invalidMessage
                    ? this.props.invalidMessage
                    : 'Vui lòng nhập trường này.',
            });
        } else {
            e.target.classList.remove('invalid');
        }

        if (typeof this.props.validator == 'function') {
            var warning = this.props.validator(e.target.value) || '';
            if (warning && warning != '') {
                e.target.classList.add('invalid');
                this.setState({ invalidMessage: warning });
            }
        }

        if (typeof this.props.onBlur == 'function') {
            this.props.onBlur(e);
        }
    };

    onKeyPress = (e) => {
        var val = e.target.value;
        if (
            (e.key === 'Enter' || e.keyCode == 13 || e.which == 13) &&
            typeof this.props.onEnter == 'function'
        ) {
            this.props.onEnter(val, e);
        } else if (typeof this.props.onKeyPress == 'function') {
            this.props.onKeyPress(e);
        }
    };

    onKeyUp = (e) => {
        if (typeof this.props.onKeyUp == 'function') {
            this.props.onKeyUp(e);
        }
    };

    onKeyDown = (e) => {
        if (typeof this.props.onKeyDown == 'function') {
            this.props.onKeyDown(e);
        }
    };

    render() {
        let cssClass = [
            'relative text-[14px] leading-[16px] outline outline-1 flex focus-within:outline-line-focus items-center gap-[8px] outline-line bg-white rounded py-[6px] px-[10px] text-[#797979] h-[37px]',
            this.state.invalidMessage !== '' ? '!outline-1 !outline-danger' : '',
            this.props.disabled && 'cursor-not-allowed',
            this.props.className,
        ];

        let _inputProps = {
            id: this.state.id,
            type: this.props.type,
            name: this.props.name,
            placeholder: this.props.placeholder,
            onChange: this.handleOnChange,
            autoComplete: this.props.autoComplete,
            readOnly: this.props.readOnly,
            onFocus: this.props.onFocus,
            onBlur: this.onBlur,
            ref: this.refFn,
            style: this.props.style,
            onKeyPress: this.onKeyPress,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            autoFocus: !!this.props.autoFocus,
            className: [
                'focus:outline-none hover:border-none p-0 border-none outline-none bg-transparent h-auto w-full placeholder-line',
                this.props.inputClassName,
                this.props.disabled && 'cursor-not-allowed',
            ].join(' '),
        };

        if (typeof this.props.value != 'undefined') {
            _inputProps['value'] = this.props.allowHtml
                ? this.props.value
                : helper.cleanXSS(this.props.value);
        }

        if (typeof this.props.defaultValue != 'undefined') {
            _inputProps['defaultValue'] = this.props.allowHtml
                ? this.props.defaultValue
                : helper.cleanXSS(this.props.defaultValue);
        }

        if (typeof this.props.required != 'undefined') {
            _inputProps['required'] = this.props.required;
            cssClass.push('required');
        }

        if (typeof this.props.readOnly != 'undefined' && this.props.readOnly) {
            cssClass.push('readonly');
        }

        if (typeof this.props.disabled != 'undefined' && this.props.disabled) {
            _inputProps['disabled'] = this.props.disabled;
            cssClass.push('disabled');
        }

        if (typeof this.props.inputRef != 'undefined') {
            _inputProps['ref'] = this.props.inputRef;
        }

        if (typeof this.props.title != 'undefined' && this.props.title != '') {
            _inputProps['title'] = this.props.allowHtml
                ? this.props.title
                : helper.cleanXSS(this.props.title);
        }

        if (typeof this.props.maxLength != 'undefined' && this.props.maxLength > 0) {
            _inputProps['maxLength'] = this.props.maxLength;
            cssClass.push('required-length');
        }

        if (typeof this.props.className != 'undefined' && this.props.className != '') {
            cssClass.push(this.props.className);
        }

        return (
            <Fragment>
                <div className={cssClass.join(' ')}>
                    {this.props.icon && (
                        <SvgIcon
                            width={20}
                            icon={this.props.icon}
                            className={this.props.iconClassName}
                        />
                    )}
                    {React.createElement('input', _inputProps)}
                    {typeof _inputProps['maxLength'] != 'undefined' && (
                        <div
                            className='maxlength-counter h-full leading-[36px]'
                            title={'Tối đa ' + this.props.maxLength + ' ký tự'}
                        >
                            {this.state.characters + '/' + this.props.maxLength}
                        </div>
                    )}
                </div>
                {this.state.invalidMessage != '' && (
                    <div className='bg-white text-[13px] leading-[20px] text-red-400 mt-[5px] px-[4px] font-medium'>
                        {this.state.invalidMessage}
                    </div>
                )}
            </Fragment>
        );
    }
}

export default Input;
