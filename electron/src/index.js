import React from 'react';
import ReactDOM from 'react-dom';
import Application from './views/app';
import './style.scss';

const lib = 'color:#666;font-size:x-small;font-weight:bold;';
const parameters = 'color:#777;font-size:x-small';
const values = 'color:#f33;font-size:x-small';
const version = __VERSION__;
const node = __NODE_ENV__;

global.window.version = () => {
    const args = [
        `%c__TITLE__\n%cversion: %c${version}\n%cenvironment: %c${node}`,
        lib, parameters, values, parameters, values,
    ];

    return console.log(...args);
};

if (node !== 'production') {
    global.window.version();
}

ReactDOM.render(<Application />, document.getElementById('app'));
