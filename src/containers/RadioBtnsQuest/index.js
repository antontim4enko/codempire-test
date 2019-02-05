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


class CheckBoxQuest extends Component {

    render() {
        const { question, answer } = this.props;
        return (
            <div className="section">
                <p>{question.id}</p>
                <p className="label">{question.text}</p>
                <div className='checkbox-options'>
                    {question.options.map((option, id) => (
                        <label key={id}>
                            <input type='radio' name={`radio-${question.id}`} value={option} className="select" onChange={e => this.props.setAnswer(question.id, e.target.value)} />
                            {option}
                        </label>
                    )
                    )}
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxQuest);