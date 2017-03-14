Router.route('/', function () {
  this.render('landing');
});

Router.route('landing', {
  name : "landing",
	onAfterAction: function() {
			this.render('landing');
	}
});

Router.route('view', {
  name : "view",
	onAfterAction: function() {
			this.render('view');
	}
});
