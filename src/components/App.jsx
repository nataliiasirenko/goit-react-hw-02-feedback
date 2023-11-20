import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic} from './Statistic/Statistic'
import {Section} from './Section/Section'
import { Notification} from './Notification/Notification'

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }



  leaveFeedbackOption =(option) => { 
    this.setState((prevState) => {
    return {
      [option]: prevState[option] + 1,
    };
});
}
 countTotalFeedback = () => {
  const {good, neutral, bad} = this.state
   return good + neutral + bad;
 }


 positive = () => {
  const {good, neutral} = this.state
  return good + neutral
}

  countPositiveFeedbackPercentage = ()=> {
    const total = this.countTotalFeedback();
   
    const value = this.positive()
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }



  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage('good');
    return (
      <>   <Section title="Please leave feedback">
      <FeedbackOptions
        leaveVote={this.leaveFeedbackOption}
        options={Object.keys(this.state)}
      />
    </Section>
    <Section title="Statistics" />
    {totalFeedback ? (
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positiveFeedback = {positivePercentage}
      />
    ) : 
      (< Notification title = "There is no feedback yet" />)
    }
    </>
   
      
    );
  }
  }





//  :bangbang:hw-02-feedback
// Основний стейт повинен бути в Арр.
//  state = {
//     good: 0,
//     netural: 0,
//     bad: 0,
// }
// Метод для збільшення відгуків повинен бути ОДИН, використовувати попереднє значення стейту і основуватися на роботі з об'єктами
// this.setState((prevState) => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//   });
// Компонент FeedbackOptions обов'язково повинен отримувати два props options={} onLeaveFeedback={}. options це массив ключів iз state
// В компоненті FeedbackOptions обов'язково використовуйте метод map для створення розмітки
// При першому відкритті сторінки, коли немає ще відгуків, повідомлення "There is no feedback" потрібно рендерити по умові в Арр.