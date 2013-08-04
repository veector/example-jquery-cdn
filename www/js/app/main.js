//Main app logic
define(["marionette"], function() {

	$(document).ready(function(){

		var testModel = new Backbone.Model({ message: TAS.MarionetteTest.App.welcomeMessage })
		new TAS.MarionetteTest.Views.itemView({ model: testModel }).render();

	});

});
