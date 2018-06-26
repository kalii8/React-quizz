import React from 'react';
import  './quizz.css';
import Question from './../question/question.js';

export default class Quizz extends React.Component {

    render(){
        return(
            <div className="quizz">
                <h1>Best quizz in the world </h1>
                <Question questionNumber="1" question="Is the question real?" answer="yes"/>
                <Question questionNumber="2" question="Is banana the best fruit?" answer="no"/>
                <Question questionNumber="3" question="Will it rain tomorrow?" answer="yes"/>
                <Question questionNumber="4" question="Czech is the greatest country in the world" answer="no"/>
                <Question questionNumber="5" question="Pinapple pizza is the best pizza?" answer="yes"/>
            </div>
        )
    }
}