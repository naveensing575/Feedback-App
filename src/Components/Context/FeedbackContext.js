import {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid';

const  FeedbackContext = createContext()

export const FeedbackProvider=({children})=>{
  const [Feedback, setFeedback] = useState([
    {
      id:1,
      text:'This is from context hook',
      rating:6
    }
  ])
  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure, you want to delete this component?'))
    {
      setFeedback(Feedback.filter((item)=>item.id !== id))
    }
  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback, ...Feedback])
  }
  return (<FeedbackContext.Provider value={{Feedback, deleteFeedback, addFeedback}}>{children}</FeedbackContext.Provider>)
} 
export default FeedbackContext