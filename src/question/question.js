import React from 'react';
import  './question.css';


export default class Question extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            answer: 'none' 
        }
    }
    render(){
        let yesClass = 'yes';
        if(this.state.answer === 'yes')
            yesClass += ' select';

        let noClass = 'no';
        if(this.state.answer === 'no')
                noClass += ' select';

        let result ='answer';
        if(this.props.answer === this.state.answer)
            result += ' correct'
        else if (this.state.answer !== 'none')
            result += ' incorrect';
        
        return (
            <div>
                <div className="whole-question">
                    <div className="question-number">{this.props.questionNumber}</div>
                    <div className="question">{this.props.question}</div>
                </div>
                    <div className="buttons">
                        <button className={yesClass} onClick={this.answer_yes.bind(this)} disabled={this.is_answered()} >YES</button>
                        <button className={noClass} onClick={this.answer_no.bind(this)} disabled={this.is_answered()}>NO</button>
                        <div className={result}></div>
                    </div>
            </div>
        );
    }

    is_answered(){
        return this.state.answer !== 'none';
    }

    answer_yes(){

        this.setState({
            answer: 'yes'
        });
    }

    answer_no(){
        this.setState({
            answer: 'no'
        });
        
    }
}
