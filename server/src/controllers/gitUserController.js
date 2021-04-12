const https = require("https");
const parseData = (data) => {
    let json = JSON.parse(data);
    let obj = {};
    obj.userName = json[0].owner.login; 
    obj.userAvatar = json[0].owner.avatar_url;
    obj.userProfile = json[0].owner.html_url;
    obj.repoQuantity = json.length;
    obj.repos = [];
    
    json.forEach(elem => {
        let repo = {};
        repo.name = elem.name;
        repo.url = elem.html_url;
        repo.description = elem.description;
        repo.creationDate = elem.created_at;
        repo.lastUpdate = elem.updated_at;
        repo.cloneUrl = elem.clone_url;
        repo.sshUrl = elem.ssh_url;
        repo.language = elem.language;
        obj.repos.push(repo)
    });
    return obj; 
}

exports.get = (req, res, next) => {
    let username = req.query.user; 
    let options = {
        headers: {
            'User-Agent': 'request'
        }
    }
    let url = `https://api.github.com/users/${username}/repos`;
    https.get(url, options, (resp) => {
        
        let data = '';
        if (resp.statusCode < 200 || resp.statusCode > 299) { 
            resp.on("data", () => { } ); 
            res.status(resp.statusCode).send("Internal server error");
        }
        else {
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                res.status(201).send(parseData(data));
            });

        }
      

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
};
