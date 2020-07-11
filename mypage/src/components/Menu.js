import React, { Component } from "react";
import "../css/components/menu.css"

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        const { isVisible } = this.state;

        return (
            <div className="Menu">
                <div className={isVisible ? "Menu__button button__active" : "Menu__button"} onClick={this.toggleMenu}>
                    <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                    <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                    <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                </div>
                <div className="Menu__content">
                    <div className={`Menu__links ${isVisible ? 'Menu__links--visible' : ''}`}>
                        <a href="/" className="link">Strona główna</a>
                        <a href="/" className="link">Projekty</a>
                        <a href="/" className="link">O mnie</a>
                        <a href="/" className="link">Kontakt</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
