Template.landing.events({
  'click #inputbutton': function(e) {
    e.preventDefault();
    var loc = document.getElementById("location").value;
    Router.go("/view");
    $.simpleWeather({
      location: loc,
      woeid: '',
      unit: 'f',
      success: function(weather) {
        if(weather.temp > 75) {
          $('body').animate({backgroundColor: '#D2746A'}, 1500);
        } else {
          $('body').animate({backgroundColor: '#0091c2'}, 1500);
        }
        html = '<h2>'+weather.city+', '+weather.region+ ' <i class="fa fa-cog" aria-hidden="true" title ="Change Your Location"></i></h2>';
        html += '<h3>'+weather.forecast[0].day +' '+weather.forecast[0].date+'</h3>'
        html += '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        // html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li><i class="fa fa-thermometer-half" aria-hidden="true"></i> '+weather.currently+'</li>';
        html += '<li><i class="fa fa-tint" aria-hidden="true"></i> '+weather.humidity+'% </li>';
        html += '<li><i class="fa fa-location-arrow" aria-hidden="true"></i> '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
        var timestamp = moment(weather.updated);
        html += '<p class="updated">Last updated '+moment(timestamp).fromNow()+'</p>';
        html += '<div class="divider"></div>';

        for(var i=1;i<5;i++) {
          html += '<ul><li class"future">'+weather.forecast[i].day+'</li>';
          // html += '<li>'+weather.forecast[i].date+'</li>';
          html += '<li><i class="smaller icon-'+weather.forecast[i].code+'"></i><li>';
          html += '<li>'+weather.forecast[i].high+'&deg;'+weather.units.temp+'</li>';
        }
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  }
});
