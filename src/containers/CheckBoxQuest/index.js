import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../../actions';
import './style.css';

const mapStateToProps = state => ({
    question: state.questions.find(qustion => qustion.id === 2),
    answer: state.answers[2],
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
                            <input type='checkbox' name={option} className="select" onChange={e => this.props.setAnswer(question.id, [...answer,e.target.name])} />
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