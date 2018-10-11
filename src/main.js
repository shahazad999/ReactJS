$ = jQuery = require('jquery');

var React = require('react');

var Home = require('./components/homePage');

var Query = require('./components/Query/query');

var Invoke = require('./components/Invoke/Invoke');

var Header = require('./components/common/header');

var App = React.createClass({
    render: function() {
        var Child;

        switch(this.props.route) {
            case 'query': Child = Query; break;
            case 'invoke': Child = Invoke; break;
            default: Child = Home;
        }

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchang', render);
render();

//React.render(<App /> , document.getElementById('app'));