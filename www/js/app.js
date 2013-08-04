TAS = {}
TAS.MarionetteTest = {}

TAS.MarionetteTest.App = {}

TAS.MarionetteTest.App.welcomeMessage = "THIS IS A WELCOME MESSAGE";

// Place third party dependencies in the lib folder
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
	baseUrl: "js/lib",
	paths: {
		"app": "../app",
		jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min",
		backbone: "backbone-1.0.0.min",
		underscore: "underscore-1.5.1.min",
		"backbone.wreqr": "backbone.wreqr-0.2.0",
		"backbone.babysitter": "backbone.babysitter-0.0.6",
		marionette: "backbone.marionette-1.0.4",
		json2: "json2"
	},
	shim: {
		jquery : {
      		exports : "jQuery"
    	},
		backbone: {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ["underscore", "jquery", "json2"],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: "Backbone"
		},
		underscore: {
			exports: "_"
		}
	},
});

// Load the main app modules to start the app
requirejs(["app/views"]);
requirejs(["app/main"]);
