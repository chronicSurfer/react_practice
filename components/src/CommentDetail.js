import React from 'react';
import faker from 'faker';

const CommentDetail =()=> {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" classname="author">
                Kyle
                </a>
                    <div className="metadata">
                        <span className="data">Today at 5:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
    )
}

export default CommentDetail;