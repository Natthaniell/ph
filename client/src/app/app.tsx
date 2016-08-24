/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps { compiler: string; framework: string; }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Phoenix</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Hello compiler='TypeScript' framework='React'/>,
    document.getElementById('app')
);

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