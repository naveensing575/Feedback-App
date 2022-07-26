import Card from './Shared/Card.js'
import { useState } from 'react'
import Button from './Shared/Button.js';
import SelectRating from './SelectRating.js';

function FeedbackForm({handleAdd}) {
  const [text, setText]= useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  const handleClick=(e)=>{
    if(text===''){
      setbtnDisabled(true)
      setMessage(null)
    }
    else if(text!=='' && text.trim().length<=10){
      setbtnDisabled(true)
      setMessage('Text must be atleast 10 characters!')
    }
    else
    {setMessage(null)
    setbtnDisabled(false)}
    setText(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedback={
        text: text,
        rating: rating
      }
      handleAdd(newFeedback)
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How much would you rate our services?</h2>
        <SelectRating select={rating=>setRating(rating)}/>
        <div className="input-group">
          <input type="text" placeholder='Write a review' value={text} onChange={handleClick}/>
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>send</Button>
        </div>
        {
          message && <div className="message">{message}</div>
        } 
      </form>
    </Card>
  )
}

export default FeedbackForm