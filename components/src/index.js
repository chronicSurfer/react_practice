import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                author={faker.name.firstName()} 
                timeAgo="6:00PM" 
                comment={faker.lorem.sentence()}
                /> 
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                author={faker.name.firstName()} 
                timeAgo="5:54PM" 
                comment={faker.lorem.sentence()}
                />
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                avatar={faker.image.avatar()} 
                author={faker.name.firstName()} 
                timeAgo="5:50PM" 
                comment={faker.lorem.sentence()}
                />
           </ApprovalCard>
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));