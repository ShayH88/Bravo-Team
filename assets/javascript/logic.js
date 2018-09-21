$(document).ready(function () {
    var api_key = "bba78334340f4c2aa00f341a19e3d27d";
    var urlQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    urlQuery += '?' + $.param({
        'api-key': api_key
    });

    function query(){
        $.ajax({
            url: urlQuery,
            method: "GET"
        }).then(function (res) {
            display();
        });
    }
    function display(){
        
    }
    $("button").on("click", function(){
        var searchTerm = $("#search-term").val();
        var startDate = $("#start-date").val();
        var limit = $("#search-limit").val();
        var endDate = $("#end-date").val();
        urlQuery += "?" + $.param({
            'q': searchTerm,
        });
        urlQuery += "?" + $.param({
            'start-date': startDate,
        });
        urlQuery += "?" + $.param({
            'end-date': endDate,
        });

        query();
    });

    

});