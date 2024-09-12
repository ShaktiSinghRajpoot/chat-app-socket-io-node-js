// import express from 'express';
// import { createServer } from 'node:http';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, 'index.html'));
// });



// // ==========send to every one==============
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       io.emit('chat message', msg);
//     });
//   });


// server.listen(3000, () => {
//     console.log('server running at http://localhost:3000');
// });




// // ================javascript=============


// <!DOCTYPE html>
// <html>

// <head>
//     <meta name="viewport" content="width=device-width,initial-scale=1.0">
//     <title>PDF View</title>
//     <style>
//         body {
//             margin: 0;
//             padding-bottom: 3rem;
//             font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//         }

//         #form {
//             background: rgba(0, 0, 0, 0.15);
//             padding: 0.25rem;
//             position: fixed;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             display: flex;
//             height: 3rem;
//             box-sizing: border-box;
//             backdrop-filter: blur(10px);
//         }

//         #input {
//             border: none;
//             padding: 0 1rem;
//             flex-grow: 1;
//             border-radius: 2rem;
//             margin: 0.25rem;
//         }

//         #input:focus {
//             outline: none;
//         }

//         #form>button {
//             background: #333;
//             border: none;
//             padding: 0 1rem;
//             margin: 0.25rem;
//             border-radius: 3px;
//             outline: none;
//             color: #fff;
//         }

//         #messages {
//             list-style-type: none;
//             margin: 0;
//             padding: 0;
//         }

//         #messages>li {
//             padding: 0.5rem 1rem;
//         }

//         #messages>li:nth-child(odd) {
//             background: #efefef;
//         }
//     </style>

//     <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>

// </head>

// <body>
//     <ul id="messages" aria-live="polite" ></ul>
//     <form id="form" action="">
//         <input id="input" autocomplete="off" /><button>Send</button>
//     </form>


//     <script>
//         const socket = io();

//         const form = document.getElementById('form');
//         const input = document.getElementById('input');
//         const messages = document.getElementById('messages');

//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             if (input.value) {
//                 socket.emit('chat message', input.value);
//                 input.value = '';
//             }
//         });

//         socket.on('chat message', (msg) => {
//             const item = document.createElement('li');
//             item.textContent = msg;
//             messages.appendChild(item);
//             window.scrollTo(0, document.body.scrollHeight);
//         });
//     </script>

// </body>

// </html>


