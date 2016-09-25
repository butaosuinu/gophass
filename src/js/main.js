const riot         = require('riot');
const $            = require('jquery');

// tags
require('../tag/home.tag');
require('../tag/not-found.tag');

// Routing
require('riot-router');

const Route         = riot.router.Route;
const DefaultRoute  = riot.router.DefaultRoute;
const NotFoundRoute = riot.router.NotFoundRoute;
const RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
	new DefaultRoute({tag: 'home'}),
	new NotFoundRoute({tag: 'not-found'})
]);


riot.mount('*');
riot.router.start();
