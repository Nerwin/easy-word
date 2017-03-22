import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Word from '/client/components/word.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderCard() {
        if (typeof this.props.words != "undefined") {
            let word = this.props.words[0];
            return <Word word={word} />
        }
    }

    render() {
        console.log(this.props.words);
        return (
            <div>
                <h1>Welcome to Easy Words</h1>
                {this.renderCard()}
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default createContainer(() => {

    console.log("Component App");

    if (WordsList.find().count < 1) {
        WordsList.insert({
            "name": "test",
            "url": "http://www.englishcollocation.com/how-to-use/have",
            "type": "An Insert"
        });
    }

    let wordsList = WordsList.find().fetch();
    //var words = JSON.parse(Assets.getText('words.json'));
    var words = [{
        "name": "have",
        "url": "http://www.englishcollocation.com/how-to-use/have",
        "type": "(verb,auxiliary verb)"
    },
    {
        "name": "this",
        "url": "http://www.englishcollocation.com/how-to-use/this",
        "type": "(pronoun,adjective,adverb)"
    },
    {
        "name": "your",
        "url": "http://www.englishcollocation.com/how-to-use/your",
        "type": "(pronoun)"
    }];


    return {
        words: wordsList,
    };
}, App);