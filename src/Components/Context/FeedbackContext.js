import {useState, createContext, useEffect} from 'react';

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
    const response = await fetch(`http://localhost:3001/feedback?_sort=id&_order=desc`)
    const data=await response.json(response);
    setFeedback(data)
    setLoading(false);
  }

  //Deleting Feedback
  const deleteFeedback= async(id)=>{
    if (window.confirm('Are you sure, you want to delete this component?'))
    {
      await fetch(`http://localhost:3001/feedback/${id}`,{ method: 'DELETE'})
      setFeedback(Feedback.filter((item)=>item.id !== id))
    }
  }

  //Add feedback
  const addFeedback= async(newFeedback)=>{
    const response= await fetch(`http://localhost:3001/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newFeedback),
    })
    const data = await response.json();

    setFeedback([data, ...Feedback])
  }

  //Update Feedback
  const UpdateFeedback= async(id, updItem)=>{
    await fetch(`http://localhost:3001/feedback/${id}`,{ method: 'PATCH'})
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