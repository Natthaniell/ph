/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

// import app types ( cashay & redux )
// import CashayApp from "./_type-cashay/app";
import ReduxApp from "./_type-redux/app";
import CashayApp from "./_type-cashay/app";

/**
 * This project is a test case,
 * main app is splited by 2 apps:
 * - redux app
 * - cashay app
 * They are using ( at least now ) same server.js file
 */
ReactDOM.render(
    <div>
        <Provider store={ReduxApp.store}>
            <ReduxApp />
        </Provider>
        <Provider store={CashayApp.store}>
            <CashayApp />
        </Provider>
    </div>,
    document.getElementById('app')
);
