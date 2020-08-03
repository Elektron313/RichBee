import React from 'react';
import './comment.scss';
import vector from '../../assets/img/Vector.png';
import authorPhoto from '../../assets/img/authors/human1.png';
import Square from '../Square';

type Comment = {
    author: string;
    text: string;
    signature: string;
};

const Comment: React.FC<Comment> = ({ text, author, signature }) => {
    return (
        <div className="comments__item">
            <Square />
            <img className={'comments__item-photo'} src={authorPhoto} alt="photo author" />
            <p className={'comments__item-author'}>{author}</p>
            <div className="vectors">
                <img src={vector} alt="vector" />
                <img src={vector} alt="vector" />
            </div>
            <p className={'comments__item-text'}>{text}</p>
            <div className={'comments__item-signature'}>
                <img src={signature} alt="Подпись" />
            </div>
        </div>
    );
};

export default Comment;

