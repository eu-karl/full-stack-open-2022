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

const DisplayBest = (props) =>{
    let copy ={...props.votes}
    let index = indexOfMax(copy)
    props.setBest(props.anecdotes[index])

    return(
        <div>
            {props.best} <br/>
            has {copy[index]} votes.
        </div>
    )
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        debugger
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            debugger
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
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
    const [best, setBest] = useState("No votes yet!")

    return (
      <div>
          <h1> Anecdotes of the day</h1>
          {anecdotes[selected]} <br/>
          has {votes[selected]} votes <br/>
          <Button handleClickFunction={setSelected} max={anecdotes.length-1} text={"another one"}/>
          <Button handleClickFunction={setVotes} text={"upvote"} votes={votes} selected={selected}></Button>

          <h1>Best anecdote</h1>
          <DisplayBest votes = {votes} anecdotes={anecdotes} setBest={setBest} best={best} ></DisplayBest>
      </div>
  )
}

export default App