# Mini Project: A RealTime Chat Application

## Date: 27 - Apr - 2020

### Tech-Stack

Client: 
  - React

Server:
  - NodeJS
  - ExpressJS
  - Socket.io
  
### Deploy

[Live Site](https://5ea6fafba0014549d02fc211--naughty-galileo-51d0c1.netlify.app/)
[Live Server](https://react-chat-application-vxcvxc.herokuapp.com/)


### Screenshot

<img src="https://i.imgur.com/YEPGLUV.png" />

### Plan Of Action
- Initial project
- Server setup
- basic setup for user joining
- user disconnecting
- add user function
- add user join function
- Client setup
- Create InfoBar component
- Create icons
- create sendMessage function
- Create Input component
- Create Message component
- Add Messages component
- Create disconnect function
- Create multi users in room function
- Add Emoji function
- Create TextContainer component
- Add function: people currently chatting
- Refactor to deploy
- Update live site

### After this project

I have understand about
- i have a strong understanding of how to send & receive messages using web sockets and Socket.io to make any realtime application

Next Steps:

### Directory Structure

```
.
├── client
    ├── public
    ├── src
        ├── components
            ├── Chat
            ├── InfoBar
            ├── Input
            ├── Join
            ├── Messages
            ├── TextContainer
            └── index.js
        ├── icons
        ├── App.js
        └── index.js
    ├── .gitignore
    └── package.json
├── server
    ├── index.js
    ├── router.js
    ├── user.js
    ├── .gitignore
    ├── package.json
└── README.md

```
### Set up

Clone git to your computer
  - `git clone`
Run for both client and server side to start the development server
  - `npm install`
  - `npm start`
