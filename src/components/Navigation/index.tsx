import React from 'react';
import './nav.scss';

const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            <div className="navigation__item">
                <span>Услуги</span>
            </div>
            <div className="navigation__item">
                <span>Возможности</span>
            </div>
            <div className="navigation__item">
                <span>Цены</span>
            </div>
            <div className="navigation__item">
                <span>Авторизация</span>
            </div>
        </div>
    );
};

export default Navigation;
