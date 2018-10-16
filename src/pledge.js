'use strict';
/*----------------------------------------------------------------
Promises Workshop: build the pledge.js ES6-style promise library
----------------------------------------------------------------*/
// YOUR CODE HERE:
function $Promise(exec) {
    if (typeof exec !== 'function') throw new TypeError('/executor.+function/i');

    this._exec = new Promise(exec);
    this._state = 'pending';
    exec(
        this._internalResolve.bind(this),
        this._internalReject.bind(this)
    )
}

$Promise.prototype._settle = function (data, state) {
    if (this._state === 'pending') {
        this._state = state;
        this._value = data;
    }
}

$Promise.prototype._internalResolve = function (data) {
    this._settle(data, 'fulfilled')
}
$Promise.prototype._internalReject = function (err) {
    this._settle(err, 'rejected');
}





// function $Promise(exec) {
//     if (typeof exec !== 'function') throw new TypeError('/executor.+function/i');
//     this._exec = new Promise(exec);
//     this._state = 'pending';
//     exec(
//         this._internalResolve.bind(this),
//         this._internalReject.bind(this)
//     );

// }

// $Promise.prototype._settle = function (value, state) {
//     if (this._state === 'pending') {
//         this._state = state;
//         this._value = value;
//     }
// }

// $Promise.prototype._internalResolve = function (data) {
//     this._settle(data, 'fulfilled');
// };
// $Promise.prototype._internalReject = function (err) {
//     this._settle(err, 'rejected');
// };






/*-------------------------------------------------------
The spec was designed to work with Test'Em, so we don't
actually use module.exports. But here it is for reference:

module.exports = $Promise;

So in a Node-based project we could write things like this:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
