/// <reference path="../../typings/index.d.ts" />
export const getGraph = (target, payload) => {
    return dispatch => {
        dispatch({type : "START_" + target});
        return new Promise(function(resolve, reject) {
            let request=new XMLHttpRequest();
            request.open("POST", "/"+target, true);
            request.setRequestHeader("Content-Type", "application/graphql");
            request.send(payload);
            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    resolve(request.responseText)
                }
            }
        }).then(response => dispatch({type: "DONE_" + target, response: JSON.parse(response)}))
    }
}