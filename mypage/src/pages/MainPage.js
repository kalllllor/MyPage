import React, { Component } from "react";
import Background from "./Background"
import "../css/pages/mainPage.css"

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <Background />
                <h1>Legia to jebana kurwa</h1>
            </div>
        );
    }
}

export default MainPage;
