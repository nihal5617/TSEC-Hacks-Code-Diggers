var server = require('ws').Server;     // we import the webServer module 
var s = new server({ port: 5500 });    // we choose port as 5500

s.on('connection', function(ws) {     
    ws.on('message', function(message) {    // #3    on getting a message with proper connection
        message = JSON.parse(message);      // #4    we will parse the stringified message from the server

        if(message.type == "name") {        // #5    we will store the name of the person who sent the message
            ws.personName = message.data;    // storing the name of the client on the server at the current session
            return;       // So, we don't want the rest of the code to run if the name is matched. Hence we return and move out of the function
        }

        console.log('Recieved: ' + message.data);  // this will show on the terminal whether server recieved the message or not

        s.clients.forEach(function e(client) {     // #6    we run a loop to send the message to all the clients on the server the message from one client and not sending the message to same client who sent it
            if(client != ws)    // so we dont server to send the message to the same client who is sending the message but to the other ppl in the chat
            client.send(JSON.stringify({   // we convert the data to string and show it to all the clients on that server
                name: ws.personName,    // to show who sent the message
                data: message.data      // to show what message did that person sent
            })); 
        });

        // ws.send('From Server: ' + message.toString()); 
    });

    ws.on('close', function() {
        console.log('I lost a client!');   // whenever someone closes a tab it will print lost a client in the terminal
    });
});