$(document).ready(function(){
    //we want to fetch the tracks
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    function parseJSON(response) {
        return response.json()
    }
    // <div class='row'><div class='one column track__number'><span id='track__number'></span></div><div class='three columns track__name'><span id='track__name'></span></div><div class='two columns track__album'><span id='track__album'></span></div><div class='six columns track__audio'><audio id='track__audio'></audio></div></div>
    fetch('https://api.airtable.com/v0/app35atgWtDtBboot/music', {
        'method': 'GET',
        'headers': {
            'Authorization': 'Bearer keyIye3zskPSBMQ6Q',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus)
    .then(parseJSON)
    .then(function(response){
        console.log(response)
    }, function(error){
        console.log(error);
    });
});
