import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SelectQuest from '../containers/SelectQuest';
import CheckBoxQuest from '../containers/CheckBoxQuest';
import RadioBtnsQuest from '../containers/RadioBtnsQuest';
import TextQuest from '../containers/TextQuest';

const mapStateToProps = state => ({
    answers: state.answers,

});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

    state = {
        isValid: null
    }

    validate = () => {
        for ( var key in this.props.answers) {
            if ((this.props.answers[key] === '') || (this.props.answers[key] === [])) {
                this.setState({isValid: false });
            } 
                
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="center">
                    <p className="banner border">Тестирование по программированию часть 1</p>
                </div>
                <SelectQuest />
                <CheckBoxQuest />
                <RadioBtnsQuest />
                <TextQuest />
                <div className="center">
                    <button onClick={this.validate} className="submit">Ответить</button>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
