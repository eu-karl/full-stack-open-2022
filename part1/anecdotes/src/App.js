import { useState } from 'react'

const Button = (props) =>{
    if(props.max) {
        return (
            <button onClick={() => props.handleClickFunction(getRandomIntInclusive(0, props.max))}>
                <i>{props.text}</i>
            </button>
        )
    }
    else if(props.text === "upvote"){
        const copy = {...props.votes}
        copy[props.selected] = copy[props.selected]+1
        return (
            <button onClick={() => props.handleClickFunction(copy)}>
                {props.text}
            </button>
        )
    }
    else
        return <div>Error displaying the button</div>
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  return (
      <div>
        {anecdotes[selected]} <br/>
        {votes[selected]} <br/>
        <Button handleClickFunction={setSelected} max={anecdotes.length-1} text={"another one"}/>
        <Button handleClickFunction={setVotes} text={"upvote"} votes={votes} selected={selected}></Button>
      </div>
  )
}

export default App