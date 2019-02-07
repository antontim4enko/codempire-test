import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    answers: state.answers,
    questions: state.questions,
    correct: state.questions.filter( question => isCorrect(question, state.answers[question.id]) ),
});

const isCorrect = ( question, answer ) => {
    if (question.type === 'text') {
        if (answer.toUpperCase().includes(question.answer.toUpperCase())) {
            return true;
        } else {
            return false;
        }
    } else if(question.type === 'checkbox') {
        var includesState;
        for( let i = 0; i < question.answer.length; i++) {
            includesState = answer.includes(question.answer[i]);
        }
        return includesState;
    } else {
        return question.answer === answer;
    }
};


class Results extends Component {
    state = {
        correct: []
    }
    render() {
        const { answers, questions } = this.props;
        return (
            <div className="wrapper">
                <div className="center">
                    <p className="banner border">Ваш результат : {this.props.correct.length}/{questions.length} </p>
                </div>
                {
                    questions.map((question, id) => {
                        return (
                            <div key={id} className='section'>
                                <p>{question.id}</p>
                                <p className="label">{question.text}</p>
                                <div className='flex-column'>
                                    <p>Ваш ответ: {(typeof(answers[question.id]) === 'object' ) ? answers[question.id].map( (answer, key) => <span key={key}>{answer},</span>) : answers[question.id] }</p>
                                    <p>Правильный ответ: {(typeof(question.answer) === 'object' ) ? question.answer.map( (answer, key) => <span key={key}>{answer},</span>) : question.answer}</p>
                                </div>
                                
                            </div>
                        );
                    }
                    )
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(Results);