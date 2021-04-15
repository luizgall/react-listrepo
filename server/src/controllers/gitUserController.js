const gitService = require("../services/gitService");



exports.getRepos = async (req, res, next) => {
    try {
        let resposta = await gitService.getRepos(req.query.user);
        resposta = await gitService.getStarRepos(resposta);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }
    
};
