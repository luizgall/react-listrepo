const https = require("https");
const request = require('request');
const fs = require('fs');
const path = require('path');

const convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}

const getGitToken = async () => {
    return new Promise ((resolve) => {
            const url = path.join(__dirname, '..', '..', 'token.txt');
            fs.readFile(url, 'utf8', (err, data) => {
                if (err) throw err;
                resolve(data);
            });
    });
}

const parseRepoData = (data) => {
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
            repo.creationDate = convertDate(elem.created_at);
            repo.lastUpdate = convertDate(elem.updated_at);
            repo.cloneUrl = elem.clone_url;
            repo.sshUrl = elem.ssh_url;
            repo.language = elem.language;
            obj.repos.push(repo)
        });

    }
    
    return obj; 
}

const updateStar =  (starRepo, userRepo) => {
    userRepo.repos.forEach( (elem) => {
        starRepo.repos.forEach( (star) => {
            if (star.name ==  elem.name) {
                elem.starred = true;
            } else {
                elem.starred = false;
            }
        }); 
    });

    return userRepo;

}
  

const gitService = {
    getRepos: async (user) =>{
        const token = await getGitToken();
        const auth = "Bearer " + token;
        let options = {
            headers: {
                'User-Agent': 'request',
                'Authorization': auth
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
                    resolve(parseRepoData(data));
                });
    
            }
            });
        });
    
    },

    getStarRepos: async (userRepo) =>{
        const token = await getGitToken();
        const auth = "Bearer " + token;
        let options = {
            headers: {
                'User-Agent': 'request',
                'Authorization': auth
            }
        }
        let url = `https://api.github.com/user/starred`;
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
                    data = updateStar(parseRepoData(data), userRepo);
                    resolve(data);
                });
            }
            });
        });
    
    },

    starRepo: async (owner, repoName) =>{
        const token = await getGitToken();
        const auth = "Bearer " + token;
        let url = `https://api.github.com/user/starred/{owner}/{repoName}`;
        let options = {
            hostname: 'api.github.com',
            port: 443,
            path: `/user/starred/${owner}/${repoName}`,
            headers: {
                'User-Agent': 'request',
                'Content-Type': 'application/json',
                'Content-Length': 0,
                'Authorization': auth
            },
            method: 'PUT'
        }
       
        return new Promise ((resolve) => {
            const req  = https.request(options, (resp) => {    
                resp.on('data', (chunk) => {
                    process.stdout.write(chunk);
                });
    
                resp.on('end', () => {
                    resolve({});
                });
            });
            req.on('error', error => {
                resolve(error);
            });

            req.end();
        });
    
    }

}

module.exports = gitService;