import React from 'react'
import PropTypes from 'prop-types';
import FeedbackItem from './FeebackItem.js'

function FeedbackList({Feedback}) {
    if(Feedback.length === 0){
        return <h2>No Feedback Go Back😂</h2>
    }
    else
    return (
               <div className="feedback-list">
                {Feedback.map((item)=><FeedbackItem key={item} Rating={item.rating} Text={item.text}/>)}
               </div>
    )
}
FeedbackList.propTypes={
    Feedback: PropTypes.object.isRequired
}

export default FeedbackList