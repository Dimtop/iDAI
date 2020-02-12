const {google} = require('googleapis');
const fs = require('fs');


const TOKEN_PATH = '../Resources/GDA/token.json';


function listLessons(req,res){

    drive.files.list({
      q: "'" + req.query.semester +"' in parents",
      fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res.data.files;
      if (files.length) {
        console.log(files);
        res.send(files.map( (file)=> file.name));
      } else {
        console.log('No files found.');
      }
    });
}

function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
}


module.exports =  function authorizeAndExecute(){
        fs.readFile('./Resources/GDA/credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Drive API.
            authorize(JSON.parse(content), listLessons);
        });
    }
