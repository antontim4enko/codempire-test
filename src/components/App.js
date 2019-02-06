import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SelectQuest from '../containers/SelectQuest';
import CheckBoxQuest from '../containers/CheckBoxQuest';
import RadioBtnsQuest from '../containers/RadioBtnsQuest';
import TextQuest from '../containers/TextQuest';
import { Link } from 'react-router-dom';
import history from '../history';


const mapStateToProps = state => ({
    answers: state.answers,

});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

    state = {
        isValid: true
    }

    validator = () => {
        for (var key in this.props.answers) {
            if ((this.props.answers[key] === '') || (this.props.answers[key] === [])) {
                this.setState({ isValid: false });
            }

        };
    }
    verify = async () => {
        await this.validator();
        if (this.state.isValid) {
            history.push('/results');
        }
    }
    reset = () => {
        this.setState({
            isValid: true
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="center">
                    <p className="banner border">Тестирование по программированию </p>
                </div>
                <SelectQuest />
                <CheckBoxQuest />
                <RadioBtnsQuest />
                <TextQuest />
                <div className="center">
                    <button onClick={this.verify} className="submit">Ответить</button>
                </div>
                <div className='warn-message' style={{ display: this.state.isValid ? 'none' : 'block' }}>
                    <p>
                        Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить ?
                    </p>
                    <button className='warn-buttons' onClick={this.reset}>
                        Нет
                    </button>
                    <Link to='/results'>Да</Link>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
