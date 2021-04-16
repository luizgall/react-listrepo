const gitService = require("../services/gitService");



exports.getRepos = async (req, res) => {


    // #swagger.tags = ['Search repositories ']
    // #swagger.description = 'Endpoint to get all user repositories'
    /* #swagger.parameters['user'] = {
               description: 'name',
               type: 'string'
    } */
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
    
    // #swagger.tags = ['Put star ']
    // #swagger.description = 'Endpoint to star specified owner repository by user'
    /* #swagger.parameters['owner'] = {
               description: 'owner user name',
               type: 'string'
    } 
    #swagger.parameters['repoName'] = {
               description: 'repository name',
               type: 'string'
    } 
    */
    try {
        let resposta = await gitService.starRepo(req.body.owner, req.body.repoName, false);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }  
};

exports.deleteStar = async (req, res) => {
    // #swagger.tags = ['Delete star ']
    // #swagger.description = 'Endpoint to delete star user put on specified owner repository'
    /* #swagger.parameters['owner'] = {
               description: 'owner user name',
               type: 'string'
    } 
    #swagger.parameters['repoName'] = {
               description: 'repository name',
               type: 'string'
    } 
    */
    try {
        let resposta = await gitService.starRepo(req.body.owner, req.body.repoName, true);
        res.status(200).send(resposta);
    }
    catch (err) {
        throw new Error(err.message)
    }  
};
