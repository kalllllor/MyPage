import React, { Component } from "react";
import "../css/components/footer.css"
import logo from "../assets/logo.png"
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer__content">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer__socials">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100001888502460">
                            facebook
                        </a>
                        <a target="_blank" href="https://www.instagram.com/karolgren/">
                            instagram
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/karol-greń-1a8749197/">
                            linkedin
                        </a>
                    </div>
                    <div className="footer__rights">
                        <p>Karol Greń © 2020</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer