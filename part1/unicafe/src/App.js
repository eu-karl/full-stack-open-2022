import { useState } from 'react'

// dynamic button, takes as args: its text, the function to be called for state change, the state to be changed
const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Statistics = ({good,neutral,bad}) => {
    const all = good+bad+neutral
    const average = (good-bad)/all
    const positive = good/all
    if(all){
        return(
            <table>
                <tbody>
                    <StatisticsLine text={"good"} value={good}/>
                    <StatisticsLine text={"neutral"} value={neutral}/>
                    <StatisticsLine text={"bad"} value={bad}/>
                    <StatisticsLine text={"all"} value={all}/>
                    <StatisticsLine text={"average"} value={average}/>
                    <StatisticsLine text={"positive"} value={positive}/>
                </tbody>
            </table>
        )
    }
    else return(
        <div>
            no feedback given
        </div>
    )
}

const StatisticsLine = ({text, value}) => <tr><td>{text}:</td><td>{value}</td></tr>


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
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

export default App