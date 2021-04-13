const gitService = require("../services/gitService");



exports.get = async (req, res, next) => {
    let resposta = await gitService.getRepos(req.query.user);
    res.status(200).send(resposta);
};
