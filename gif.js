$(document).ready(function() {

    var sports = [
        "association croquet","badminton","bandy","baseball","basketball",
        "biathlon","boccie","boules","bowling","candlepins","cocked hat","duckpins","bowls",
        "cricket","Twenty20 cricket","croquet","cross-country","curling","darts",
        "deck tennis","Eisstockschiessen","field hockey","fives","football",
        "Australian football","soccer","Gaelic football","gridiron football","rugby",
        "gymnastics","rhythmic gymnastics","handball","Hooverball","horseshoe pitching","hurling","ice hockey","jai alai","kabaddi","korfball","lacrosse","box lacrosse",
        "netball","orienteering","pelota","rackets","racquetball","real tennis","rounders",
        "skating","figure skating","roller-skating","speed skating","skiing",
        "Nordic skiing","cross-country skiing","shinty","shuffleboard","softball",
        "squash rackets","swimming","synchronized swimming",
        "table tennis","team handball","tennis","paddle tennis","table tennis",
        "track-and-field ","running","relay race","triathlon","tug-of-war",
        "volleyball","water polo",
    ];

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
          }
      
    }