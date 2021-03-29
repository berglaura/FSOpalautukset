import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>{props.text} {props.value}</tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
      </table>
    )
  }
}

const App = () => {
  //tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const average = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    } else {
      return (good - bad) / all;
    }
  }

  const positive = () => {
    if (all === 0) {
      return 0;
    } else {
      return  good / all;
    }
  }

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={increaseGood} text='good'/>
        <Button handleClick={increaseNeutral} text='neutral'/>
        <Button handleClick={increaseBad} text='bad'/>
      </div>
      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average().toFixed(2)}
        positive={positive().toFixed(2)} />
    </div>
  );
}

export default App;
