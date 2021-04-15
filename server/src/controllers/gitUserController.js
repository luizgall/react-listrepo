const gitService = require("../services/gitService");



exports.getRepos = async (req, res) => {
    try {
        let resposta = await gitService.getRepos(req.query.user);
        resposta = await gitService.getStarRepos(resposta);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }
    
};

exports.putStar = async (req, res) => {
    try {
        console.log("recebi");
        console.log(req.body);
        let resposta = await gitService.starRepo(req.body.owner, req.body.repoName, false);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }  
};

exports.deleteStar = async (req, res) => {
    try {
        let resposta = await gitService.starRepo(req.body.owner, req.body.repoName, true);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }  
};
