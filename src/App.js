import './App.css';
import FeedbackForm from './Components/Pages/FeedbackForm';
import FeedbackList from './Components/Pages/FeedbackList';
import FeedbackStats from './Components/Pages/FeedbackStats';
import Header from './Components/Pages/Header.js'; 
import {FeedbackProvider} from './Components/Context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Header text='Feedback UI'/>
      <div className='container'>
      <FeedbackForm />
        <FeedbackStats/>
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

export default App