//import React from "react";
//import ReactDOM from "react-dom";

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://cdn-3.cdp.pl/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/1/3/13916_0.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        img: 'https://fwcdn.pl/fpo/63/16/776316/7892306.3.jpg'
    },
    {
        id: 3,
        title: 'Avatar',
        desc: 'Film fantasy',
        img: 'https://static.posters.cz/image/750/plakaty/avatar-limited-ed-couple-i7199.jpg'
    },
    {
        id: 4,
        title: 'Włladca Pierścieni',
        desc: 'Film o podróży Bilbo Bagginsa',
        img: 'https://mb.web.sapo.io/7622ca43ac86cc2d41b890d3488599cc2e80e26f.jpg'
    }
];

var Movie = React.createClass({
    render: function() {
        return React.createElement("li", {},
            React.createElement(MovieTitle, { title: this.props.movie.title }),
            React.createElement(MovieDescription, { desc: this.props.movie.desc }),
            React.createElement("img", { src: this.props.movie.img })
        );
    },
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    }
});

var MovieTitle = React.createClass({
    render: function() {
        return React.createElement("h2", {}, this.props.title);
    },
    propTypes: {
        title: React.PropTypes.string.isRequired
    }
});

var MovieDescription = React.createClass({
    render: function() {
        return React.createElement("p", {}, this.props.desc);
    },
    propTypes: {
        desc: React.PropTypes.string.isRequired
    }
});

var MovieList = React.createClass({
    render: function() {
        var moviesElements = this.props.list.map(function(movie) {
            return React.createElement(Movie, { movie: movie, key: movie.id });
        });
        return React.createElement("ul", {}, moviesElements);
    },
    propTypes: {
        list: React.PropTypes.array.isRequired
    }
});

var element = React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement(MovieList, {list: movies} )
);

ReactDOM.render(element, document.getElementById("app"));
