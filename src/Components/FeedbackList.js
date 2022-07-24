import React from 'react'
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem.js'

function FeedbackList({Feedback, handleDelete}) {
    if(!Feedback || Feedback.length === 0){
        return <p>No Feedback Go Back👈</p>
    }
    
    return (
               <div className="feedback-list">
                {Feedback.map((item)=><FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>)}
               </div>
    )
}
FeedbackList.propTypes={
    Feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default FeedbackList