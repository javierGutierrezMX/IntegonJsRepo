$(document).ready(function () {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3005/autores',
        success: function (data) {
            console.log("Autores:");
            console.log(data);
            // // find the most recent game that had a score reported
            // const lastGame = data.results.find(g => g.intAwayScore != null && 
            //                                         g.intHomeScore != null);
	  
            // $("#game_date").html(lastGame.dateEvent);
            // $("#away_team").html(lastGame.strAwayTeam);
            // $("#home_team").html(lastGame.strHomeTeam);
            // $("#away_score").html(lastGame.intAwayScore);
            // $("#home_score").html(lastGame.intHomeScore);

            // $("#game_table").show();
        }
    });
});