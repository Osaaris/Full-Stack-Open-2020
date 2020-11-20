import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  if (props.totalFeedback === 0) {
    return (
      <p>No feedback yet</p>
    );
  }

  else
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>

            <tr>
              <td><StatisticLine text="Good:" /></td>
              <td><StatisticLine value={props.good} /></td>
            </tr>

            <tr>
              <td><StatisticLine text="Neutral:" /></td>
              <td><StatisticLine value={props.neutral} /></td>
            </tr>

            <tr>
              <td><StatisticLine text="Bad:" /></td>
              <td><StatisticLine value={props.bad} /></td>
            </tr>

            <tr><td><br /></td></tr>

            <tr>
              <td><StatisticLine text="Total feedback:" /></td>
              <td><StatisticLine value={props.totalFeedback} /></td>
            </tr>

            <tr>
              <td><StatisticLine text="Avarage feedback:" /></td>
              <td><StatisticLine value={props.avarageFeedback} /></td>
            </tr>

            <tr>
              <td><StatisticLine text="Positive feedback:" /></td>
              <td><StatisticLine value={props.positiveFeedback} /></td>
            </tr>

          </tbody>
        </table>
      </div>
    );
}

const StatisticLine = (props) => {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.value}</div>
    </div>
  );
}

/* sama asia kuin alla oleva Button
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}*/

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const avarageFeedback = ((good) + (neutral * 0) + (bad * (-1)) / 3).toFixed(2);
  const positiveFeedback = (100 * good / (good + neutral + bad)).toFixed(2) + " %";

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  const setToZero = () => setGood(0) + setNeutral(0) + setBad(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text="Good :)" />
      <Button handleClick={increaseNeutral} text="Neutral :|" />
      <Button handleClick={increaseBad} text="Bad :(" />
      <Button handleClick={setToZero} text="Reset all" />

      <Statistics totalFeedback={totalFeedback} avarageFeedback={avarageFeedback}
        positiveFeedback={positiveFeedback} good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));