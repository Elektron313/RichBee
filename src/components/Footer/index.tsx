import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__additional-info'}>
                <div className="column-info">
                    <h2>Relationz</h2>
                    <p>Product Tour</p>
                    <p>Pricing</p>
                    <p>Founding Members</p>
                    <p>Case Studies</p>
                </div>
                <div className="column-info">
                    <h2>Company</h2>
                    <p>Blog</p>
                    <p>Career</p>
                    <p>Privacy</p>
                    <p>About</p>
                </div>
                <div className="column-info">
                    <h2>Support</h2>
                    <p>Documentation</p>
                    <p>Security</p>
                    <p>Mobility Guide</p>
                    <p>FAQs</p>
                </div>
                <div className="column-info">
                    <h2>Legal</h2>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Information</p>
                    <p>GDPR Commitment</p>
                </div>
            </div>
            <div className="footer__end">
                <h1>Relationz</h1>
                <p>Copyright © 2010 - 2019 Relationz Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
