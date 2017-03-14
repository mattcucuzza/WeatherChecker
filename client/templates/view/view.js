Template.view.events({
  'click .fa-cog': function(e) {
    e.preventDefault();
    Router.go('/');
    $('body').animate({backgroundColor: '#bdc3c7'}, 1500);
  },
  'click #homebutton': function(e) {
    e.preventDefault();
    Router.go('/');
    $('body').animate({backgroundColor: '#bdc3c7'}, 1500);
  }
});
