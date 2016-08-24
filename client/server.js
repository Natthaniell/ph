var express = require('express');
var http = require('http');
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
     * Constructor.
     *
     * @constructor
     */
    function Server() {
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
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Set up server config
     * @method config
     */
    Server.prototype.config = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });
        this.app.use(express.static('public'));
    };
    /**
     * Set server port to use
     * @method port
     */
    Server.prototype.port = function () {
        this.http.listen(8080, function () {
            console.log('listening on *:8080');
        });
    };
    return Server;
}());
Server.bootstrap();
//# sourceMappingURL=server.js.map