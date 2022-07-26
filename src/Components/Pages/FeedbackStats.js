import {useContext} from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
  const{Feedback}= useContext(FeedbackContext)    
  //ratings average
  let avg=Feedback.reduce((acc, curr)=>{
    if(Feedback.length)
    {
      acc+=curr.rating
    }
    return acc
  }, 0)/Feedback.length
  return (
    <div className="feedback-stats">
      <h4>{Feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg)?0:avg}</h4>
    </div>
  )
}

export default FeedbackStats