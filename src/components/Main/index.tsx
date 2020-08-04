import React from 'react';
import Search from 'antd/es/input/Search';
import { CheckOutlined } from '@ant-design/icons';
import './main.scss';
import phone from '../../assets/img/Image.png';
import ring5 from '../../assets/img/rings/ring5.png';
import ring6 from '../../assets/img/rings/ring6.png';
import Square from '../Square';

const Main: React.FC = () => {
    return (
        <main className={'main'}>
            <Square />
            <div className="main__info">
                <div className="main__info-description">
                    <h2>Отношения на новом уровне</h2>
                    <p>
                        The multichannel sales engagement platform which automates personal email outreach, calls, and
                        and tasks, while Sales can focus on what really matters - closing deals.
                    </p>
                    <Search placeholder="Email id" enterButton="Try it for free" size={'large'} />
                </div>
                <div className="main__info-options">
                    <div>
                        <CheckOutlined />
                        <span>Synced contacts</span>
                    </div>
                    <div>
                        <CheckOutlined />
                        <span>Regular reminders</span>
                    </div>
                    <div>
                        <CheckOutlined />
                        <span>The multichannel </span>
                    </div>
                </div>
            </div>
            <div className="main__img">
                <img src={ring5} alt="ring5" className={'ring5'} />
                <img src={ring6} alt="ring6" className={'ring6'} />
                <img src={phone} alt="example" />
            </div>
        </main>
    );
};

export default Main;
