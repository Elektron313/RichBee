import React from 'react';
import './header.scss';
import Navigation from '../Navigation';
import { Button } from 'antd';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__info">
                <div className="header__info-title">
                    <span>Relationz</span>
                </div>
                <div className="header__info-nav">
                    <Navigation />
                </div>
            </div>
            <div className="header__register">
                <Button shape="round" style={{ width: '118px', border: '1.03958px solid #1943EF', background: 'inherit ' }}>
                    <span>Регистрация</span>
                </Button>
            </div>
        </header>
    );
};

export default Header;
