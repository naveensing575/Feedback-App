import React, {useState} from 'react'
import './App.css';
import FeedbackData from './Components/data/FeedbackData';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import Header from './Components/Header.js';

function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure, you want to delete this component?'))
    {
      setFeedback(Feedback.filter((item)=>item.id !== id))
    }
  }
  return (
    <>
      <Header text='Feedback UI'/>
      <div className='container'>
        <FeedbackStats Feedback={Feedback}/>
        <FeedbackList Feedback={Feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App