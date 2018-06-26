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
        
        return (
            <div>
                <div className="whole-question">
                    <div className="question-number">{this.props.questionNumber}</div>
                    <div className="question">{this.props.question}</div>
                </div>
                    <div className="buttons">
                        <button className={yesClass} onClick={this.answer_yes.bind(this)}>YES</button>
                        <button className={noClass} onClick={this.answer_no.bind(this)}>NO</button>
                    </div>
            </div>
        );
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
