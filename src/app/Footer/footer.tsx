import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/story">Our Story</a></li>
                            <li><a href="/mission">Mission</a></li>
                            <li><a href="/team">Team</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/FAQ">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/help">Help Center</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/terms">Terms</a></li>
                            <li><a href="/policies">Policies</a></li>
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
