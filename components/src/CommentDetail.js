import React from 'react';
import faker from 'faker';

const CommentDetail =(props)=> {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" classname="author">
                {props.author}
                </a>
                    <div className="metadata">
                        <span className="data">Today at {props.timeAgo}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
    )
}

export default CommentDetail;