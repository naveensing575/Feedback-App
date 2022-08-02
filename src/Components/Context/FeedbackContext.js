import {useState, createContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const  FeedbackContext = createContext()

export const FeedbackProvider=({children})=>{
  const [loading, setLoading] = useState(true);
  const [Feedback, setFeedback] = useState([])

  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    FetchFeedback()
  }, []);

  //Fetching Feedback from json-server

  const FetchFeedback = async() => {
    const response = await fetch('http://localhost:3001/feedback')
    const data=await response.json(response);
    console.log(data)
    setLoading(false);
  }

  //Deleting Feedback
  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure, you want to delete this component?'))
    {
      setFeedback(Feedback.filter((item)=>item.id !== id))
    }
  }

  //Add feedback
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback, ...Feedback])
  }

  //Update Feedback
  const UpdateFeedback=(id, updItem)=>{
    setFeedback(Feedback.map((item)=>item.id === id?{...item, ...updItem}:item))
  }

  //Edit Feedback
  const editFeedback=(item)=>{
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  return (<FeedbackContext.Provider value={{Feedback, loading, deleteFeedback, addFeedback, editFeedback, UpdateFeedback, FeedbackEdit}}>{children}</FeedbackContext.Provider>)
} 
export default FeedbackContext