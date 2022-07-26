import {motion, AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem.js'

function FeedbackList({Feedback, handleDelete}) {
    if(!Feedback || Feedback.length === 0){
        return <p>No Feedback Go Back👈</p>
    }
    
    return (
            <div className="feedback-list">
                <AnimatePresence>
             {
                Feedback.map((item)=>(
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                    </motion.div>
                    ))}
             </AnimatePresence>
            </div>
            //Without Animation
            //    <div className="feedback-list">
            //     {Feedback.map((item)=><FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>)}
            //    </div>
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