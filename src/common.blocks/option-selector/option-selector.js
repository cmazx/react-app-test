import React from 'react';
import './option-selector.css';

class OptionSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            selectedOption: props.selectedOption
        };
    }

    onSelect(e, value) {
        this.setState((state, props) => ({selectedOption: value}));
        this.props.onSelect(e,value);
    }

    render() {
        return (
            <div className="option-selector">
                {this.props.options.map(item => (
                    <div onClick={(e) => this.onSelect(e, item.value)} className={
                        (this.state.selectedOption === item.value)
                            ? 'option-selector__value active_selector'
                            : 'option-selector__value'
                    } key={item.value}>{item.value}</div>
                ))}
            </div>
        );
    }
}

export default OptionSelector;
