import {v4 as uuidv4} from 'uuid';
import {useState} from 'react'
import './App.css';
import FeedbackData from './Components/data/FeedbackData';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import Header from './Components/Header.js';

function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback, ...Feedback])
  }
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
      <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats Feedback={Feedback}/>
        <FeedbackList Feedback={Feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App