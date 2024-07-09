import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://facebook.com">Facebook</a></li>
                            <li><a href="https://twitter.com">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>&copy; 2024 Fantasy Soccer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
