import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    answers: state.answers,
    questions: state.questions,
    correct: state.questions.filter( question => question.answer === state.answers[question.id]),
});

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
                    questions.map(question => {
                        return (
                            <div className='section'>
                                <p>{question.id}</p>
                                <p className="label">{question.text}</p>
                                Ваш ответ: {answers[question.id]}
                                Правильный ответ: {question.answer}
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