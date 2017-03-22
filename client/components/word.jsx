import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Word extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, instance) {
        event.preventDefault();
        console.log("Click handled ", event.currentTarget.id);
    }

    render() {
        if (typeof this.props.word == 'undefined') {
            return (
                <p>Oops can't find the word ...</p>
            )
        } else {
            return (
                <div className="card text-center">
                    <div className="group-button">
                        <img src="/images/words.png" className="img-card text-center"></img>
                        <h2 className="name-card text-center">{this.props.word.name}</h2>
                        <p className="text-card text-justify">{this.props.word.type}</p>
                        <button className="btn btn-block btn-success" type="button" id={"keep"} onClick={this.handleClick}>Keep for later</button>
                        <button className="btn btn-block btn-warning" type="button" id={"next"} onClick={this.handleClick}>Next</button>
                        <button className="btn btn-block btn-danger" type="button" id={"eliminate"} onClick={this.handleClick}>Eliminate</button>
                    </div>
                </div>
            )
        }
    }
}

Word.propTypes = {
    'word': React.PropTypes.any.isRequired,
    'word': React.PropTypes.object,
};