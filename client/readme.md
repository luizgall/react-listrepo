# ListRepo

ListRepo is a ReactJS and NodeJS case study. Use the search bar to get a list of all selected user repositories and star them.

## Client app

### Installation 

To install the Frontend Reactapp, clone the repository, navigate to the client/  folder and run the command line to install the project dependencies: 

```bash
npm install
```

### Usage 

To run the project, use the command

```bash
npm run start
```

The application will be available in localhost:3000.

To run unit tests, use the command

```bash
npm run test
```

## Server app

### Installation 

To install the Nodejs server, clone the repository, navigate to the server/  folder and run the command line to install the project dependencies: 

```bash
npm install
```

You are also going to need a [GithubApi token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to make requests. In the server folder, create a "token.txt" file and paste the token inside. 

### Usage 

To run the server, use the command

```bash
node server.js
```

The application will be running in localhost:3001. 

### API Documentation

With the server running, go to localhost:3001/doc to see the endpoints information.