import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Question from './question/question.js'

ReactDOM.render(
  <div>
  <Question questionNumber="1" question="Is the question real?" answer="yes"/>
  <Question questionNumber="2" question="Is banana the best fruit?" answer="no"/>
  <Question questionNumber="3" question="Will it rain tomorrow?" answer="yes"/>
  <Question questionNumber="4" question="Czech is the greatest country in the world" answer="no"/>
  <Question questionNumber="5" question="Pinapple pizza is the best pizza?" answer="yes"/>
  </div>,
  document.getElementById('app')
);
