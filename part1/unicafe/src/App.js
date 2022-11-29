import { useState } from 'react'

// dynamic button, takes as args: its text, the function to be called for state change, the state to be changed
const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const StatisticsDisplay = ({good,neutral,bad}) => {
    return(
        <div>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // returns function
    const increment = (fun,value) => {
        console.log(value)
        return(() => fun(value + 1))
    }

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={increment(setGood,good)} text={"good"}></Button>
                <Button handleClick={increment(setNeutral,neutral)} text={"neutral"}></Button>
                <Button handleClick={increment(setBad,bad)} text={"bad"}></Button>
            </div>
            <h1>statistics</h1>
            <StatisticsDisplay good={good} neutral={neutral} bad={bad}></StatisticsDisplay>
        </div>
    )
}

export default App