"use strict";
/// <reference path="../../typings/index.d.ts" />
var React = require("react");
var ReactDOM = require("react-dom");
var Main = React.createClass({
    render: function () {
        return (<div>
                <p>hello react!</p>
        </div>);
    }
});
ReactDOM.render(<Main />, document.getElementById("example"));
// $(document).ready(() => {
//
//     var query = '{user(id:"1"){name}}';
//     query = encodeURI(query);
//
//     $.ajax({
//         method : 'GET',
//         url : '/graphql?query=' + query,
//         dataType: 'json',
//         success: (data) => {
//             console.warn('success');
//             console.info(data);
//         }
//     });
//
//
// }); 
//# sourceMappingURL=app.js.map