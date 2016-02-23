$(document).ready(function(){
    //we want to fetch the tracks
    var musicContainer = document.getElementById('music-container');

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    function parseJSON(response) {
        return response.json();
    }
    fetch('https://api.airtable.com/v0/app35atgWtDtBboot/music', {
        'method': 'GET',
        'headers': {
            'Authorization': 'Bearer keyIye3zskPSBMQ6Q',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus)
    .then(parseJSON)
    .then(function(response){
        console.log(response);
        //lets get that data
        var arr = [];
        for(var i=0; i<response.records.length; i++){
            console.log("For Loop");
            if(response.records[i].fields.playlist_id === 2){
                arr.push(response.records[i]);
            }
        }
        arr.sort(function(a,b) { return parseFloat(a.fields.song_order) - parseFloat(b.fields.song_order) } );
        for(var i = 0; i<arr.length; i++){
            var object = arr[i];
            console.log(object.fields.song_title);
            if(object.fields.song_title !== undefined){
                console.log("For Loop conditional");
                var fields = object.fields;
                var template = "<div class='row'><div class='one column track__number'><span class='track__number'>"+ fields.song_order +"</span></div><div class='three columns track__name'><span class='track__name'>"+ fields.song_title +"</span></div><div class='four columns track__album'><span class='track__album'>"+ fields.album_name +"</span></div><div class='four columns'><audio class='track__audio' src='"+ fields.song_file[0].url+"' controls></audio></div></div>";
                musicContainer.innerHTML += template;
            }
        }
    }, function(error){
        console.log(error);
    });
});
