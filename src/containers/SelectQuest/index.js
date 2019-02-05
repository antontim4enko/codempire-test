import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../../actions';

const mapStateToProps = state => ({
    question: state.questions.find(qustion => qustion.id === 1),
    answer: state.answers[1],
});

const mapDispatchToProps = dispatch => ({
    setAnswer: (id, answer) => dispatch(setAnswer(id, answer)),
});


class SelectQuest extends Component {

    render() {
        const { question } = this.props;
        return (
            <div className="section">
                <p>{question.id}</p>
                <p className="label">{question.text}</p>
                <select name="number" className="select" onChange={e => this.props.setAnswer(question.id, e.target.value)} value={this.props.answer} >
                    {question.options.map( (answer, id) => <option key={id} value={answer}>{answer}</option>)}
                </select>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectQuest);
