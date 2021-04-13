const https = require("https");

const parseData = (data) => {
    let json = JSON.parse(data);
    let obj = {};
    if(json.length > 0){
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

    }
    
    return obj; 
}

const gitService = {
    getRepos: async (user) =>{
        let options = {
            headers: {
                'User-Agent': 'request'
            }
        }
        let url = `https://api.github.com/users/${user}/repos`;
        return new Promise ((resolve) => {
            https.get(url, options, (resp) => {        
            let data = '';
            if (resp.statusCode < 200 || resp.statusCode > 299) { 
                resp.on("data", () => { } ); 
                resolve({});
            }
            else {
                resp.on('data', (chunk) => {
                    data += chunk;
                });
    
                resp.on('end', () => {
                    resolve(parseData(data));
                });
    
            }
            });
        });
    
    }
}

module.exports = gitService;