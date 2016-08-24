const express = require('express');
const http = require('http');


/**
 * The server.
 *
 * @class Server
 */
class Server {

    private app;
    private http;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();
        this.http = http.Server(this.app);
        //configure application
        this.config();
        this.port();
    }

    /**
     * Bootstrap the application.
     *
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static bootstrap() {
        return new Server();
    }

    /**
     * Set up server config
     * @method config
     */
    config() {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });
        this.app.use(express.static('public'));
    }

    /**
     * Set server port to use
     * @method port
     */
    port() {
        this.http.listen(8080, function () {
            console.log('listening on *:8080');
        });
    }

}

Server.bootstrap();
