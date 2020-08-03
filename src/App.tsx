import React from 'react';
import './app.scss';
import Header from './components/Header';
import Main from './components/Main';
import signature from './assets/img/Signature.png';
import Comment from './components/Comment';
import author2 from './assets/img/authors/human2.png';
import author3 from './assets/img/authors/author3.png';
import author4 from './assets/img/authors/author4.png';
import author5 from './assets/img/authors/author5.png';
import author6 from './assets/img/authors/author6.png';
import author7 from './assets/img/authors/author7.png';
import ring1 from './assets/img/rings/ring1.png';
import ring2 from './assets/img/rings/ring2.svg';
import ring3 from './assets/img/rings/ring3.png';
import ring4 from './assets/img/rings/ring4.png';
import { Button } from 'antd';
import Footer from './components/Footer';

const dataComment = {
    author: 'Michelle Johnson, Australia',
    text:
        'The multichannel sales engagement platform which automates personal email outreach, calls, and tasks,' +
        ' while Sales can focus on what really matters - closing while Sales can focus on what really matters - closing',
    signature,
};

function App() {
    return (
        <div className="App">
            <img className={'ring1'} src={ring1} alt="ring1" />
            <img className={'ring2'} src={ring2} alt="ring2" />
            <img className={'ring3'} src={ring3} alt="ring3" />
            <Header />
            <Main />
            <div className="comments">
                <h2>Что о нас говорят пользователи</h2>
                <Comment text={dataComment.text} author={dataComment.author} signature={dataComment.signature} />
                <img className={'author2'} src={author2} alt="author" />
                <img className={'author3'} src={author3} alt="author" />
                <img className={'author4'} src={author4} alt="author" />
                <img className={'author5'} src={author5} alt="author" />
                <img className={'author6'} src={author6} alt="author" />
                <img className={'author7'} src={author7} alt="author" />
                <div className="comments__footer">
                    <div className="comments__footer-select"></div>
                    <div className="comments__footer-select"></div>
                    <div className="comments__footer-select active"></div>
                    <div className="comments__footer-select"></div>
                    <div className="comments__footer-select"></div>
                    <div className="comments__footer-select last"></div>
                </div>
            </div>
            <div className="offer">
                <img className={'ring4'} src={ring4} alt="ring4" />
                <div className="offer__text">
                    <h1>Form better relationships with everyone</h1>
                    <p>Start your free 14 days trial.</p>
                </div>
                <Button>Try it for free</Button>
            </div>
            <Footer />
        </div>
    );
}

export default App;
