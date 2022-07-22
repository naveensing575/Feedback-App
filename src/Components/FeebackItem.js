import Card from "./Card"
import PropTypes from 'prop-types';

function FeebackItem({Rating, Text}) {
  return (
    <>
    <Card>
        <div className="num-display">{Rating}</div>
        <div className="text-display">{Text}</div>
    </Card>
    </>
  )
}

FeebackItem.propTypes={
    Rating: PropTypes.number.isRequired,
    Text: PropTypes.string.isRequired
}

export default FeebackItem