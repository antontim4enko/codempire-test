import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../../actions';

const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => ({
    setAnswer: (id, answer) => dispatch(setAnswer(id, answer)),
});



class QuizComponent extends Component {

    answerChange = (e, answer, option, question) => {
        
        (answer.includes(option))
            ? this.props.setAnswer(question.id, answer.splice(answer.indexOf(option), 1)) 
            : this.props.setAnswer(question.id, [...answer, e.target.name])
    }

    renderQuiz = (question, answer) => {
        switch (this.props.question.type) {
            case 'select':
                return (
                    <select className="select" onChange={e => this.props.setAnswer(question.id, e.target.value)} value={answer} >
                        {question.options.map((answer, id) => <option key={id} value={answer}>{answer}</option>)}
                    </select>
                );
            case 'text':
                return (
                    <input type='text' value={answer} onChange={e => this.props.setAnswer(question.id, e.target.value)} />
                );
            case 'checkbox':
                return (
                    <div className='flex-column'>
                        {question.options.map((option, id) => (
                            <label key={id}>
                                <input type='checkbox' checked={answer.includes(option)} name={option} className="select" onChange={e => this.answerChange(e, answer, option, question)} />
                                {option}
                            </label>
                        ))}
                    </div>
                );
            case 'radio':
                return (
                    <div className='flex-column'>
                        {question.options.map((option, id) => (
                            <label key={id}>
                                <input type='radio' checked={answer === option} name={`radio-${question.id}`} value={option} className="select" onChange={e => this.props.setAnswer(question.id, e.target.value)} />
                                {option}
                            </label>
                        ))}
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        const { question } = this.props;
        return (
            <div className="section">
                <div className='section'>
                    <p className='number'>{question.id}.</p>
                    <p className="label">{question.text}</p>
                </div>
                {
                    this.renderQuiz(this.props.question, this.props.answer)
                }

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
