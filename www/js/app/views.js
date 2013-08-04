
//Views for the app
define(["marionette"], function() {

	TAS.MarionetteTest.Views = {}


	
	//Creating a test ITEM VIEW
	TAS.MarionetteTest.Views.itemView = Backbone.Marionette.ItemView.extend({
		el: "#dTest",
		template: "#tmplItemView"
	});
});