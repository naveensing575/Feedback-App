import React, {useState} from 'react'
import './App.css';
import FeedbackData from './Components/data/FeedbackData';
import FeebackItem from './Components/FeebackItem';
import FeedbackList from './Components/FeedbackList';
import Header from './Components/Header.js';

function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header text='Feedback UI'/>
      <div className='container'>
        <FeedbackList Feedback={Feedback}/>
      </div>
    </>
  )
}

export default App