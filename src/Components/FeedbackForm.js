import Card from './Shared/Card.js'
import { useState } from 'react'
import Button from './Shared/Button.js';

function FeedbackForm() {
  const [text, setText]= useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState('')
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
  return (
    <Card>
      <form>
        <h2>How would you rate our services?</h2>
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