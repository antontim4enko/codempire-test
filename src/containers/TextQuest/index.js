import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../../actions';

const mapStateToProps = state => ({
    question: state.questions.find(qustion => qustion.id === 3),
    answer: state.answers[3],
});

const mapDispatchToProps = dispatch => ({
    setAnswer: (id, answer) => dispatch(setAnswer(id, answer)),
});


class TextQuest extends Component {

    render() {
        const { question, answer } = this.props;
        return (
            <div className="section">
                <p>{question.id}</p>
                <p className="label">{question.text}</p>
                <input type='text' value={answer} onChange={e => this.props.setAnswer(question.id, e.target.value)} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextQuest);
