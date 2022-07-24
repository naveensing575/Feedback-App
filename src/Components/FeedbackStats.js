import PropTypes from 'prop-types'

function FeedbackStats({Feedback}) {
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
FeedbackStats.propTypes={
  Feedback: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          rating: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
      })
  )
}

export default FeedbackStats