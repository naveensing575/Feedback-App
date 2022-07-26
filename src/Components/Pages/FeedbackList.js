import {motion, AnimatePresence} from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem.js'
import FeedbackContext from '../Context/FeedbackContext.js';


function FeedbackList() {
    const{Feedback}= useContext(FeedbackContext)    
    if(!Feedback || Feedback.length === 0){
        return <p>No Feedback Go Back👈</p>
    }
    else
    return (
            <div className="feedback-list">
                <AnimatePresence>
             {
                Feedback.map((item)=>(
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <FeedbackItem key={item.id} item={item}/>
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

//Proptypes for feedback before useContext hook
// FeedbackList.propTypes={
//     Feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired
//         })
//     )
// }

export default FeedbackList