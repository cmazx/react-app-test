import React from 'react';
import './menu-position-left.css';
import OptionSelector from "../option-selector/option-selector";
import Button from "../button/Button";

class MenuPositionLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseUnHover = this.handleMouseUnHover.bind(this);
        let selectedOption = null;
        props.options.forEach(item => {
            if (item.active) {
                selectedOption = item.value;
            }
        })
        this.state = {
            count: 1,
            selectedOption: selectedOption,
            isHovering: false,
        };
    }


    keyPress(e) {
        this.setState((state, props) => ({counter: e.target.value}));
    }

    addToCart(e) {
        this.props.onAddToCart(e.target)
    }

    handleMouseHover() {
        this.setState({isHovering: true});
    }

    handleMouseUnHover() {
        this.setState({isHovering: false});
    }

    render() {
        let selectOption = (e, v) => {
            this.setState((state, props) => ({selectedOption: v}));
        }
        let imageClassName = 'menu-position-left__image ' + (this.props.reflected ? 'reflected' : '');
        let positionClassName = 'menu-position-left'
            + (this.props.reflected ? ' reflected' : '')
            + (this.state.isHovering ? ' focused' : '');

        return (
            <div className={positionClassName}>
                <div className="menu-position-left__wrap">
                    <div className="menu-position-left__info_column"
                         onMouseEnter={this.handleMouseHover}
                         onMouseLeave={this.handleMouseUnHover}>
                        <div className="menu-position-left__info_column__name">{this.props.name}</div>
                        <div className="menu-position-left__info_column__description">{this.props.description}</div>
                        <OptionSelector options={this.props.options}
                                        selectedOption={this.state.selectedOption}
                                        onSelect={selectOption}/>
                        <div className="menu-position-left__info_column__purchase">
                            <Button onClick={this.addToCart} text="Add"/>
                        </div>
                    </div>
                    <div className="menu-position-left__image_column">
                        <img className={imageClassName} alt="" src={this.props.image}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuPositionLeft;
