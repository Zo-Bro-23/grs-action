"use strict";

// Dependencies
var iterateObject = require("iterate-object");

/**
 * mapObject
 * Array-map like for objects.
 *
 * @name mapObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function returning the field values.
 * @param {Boolean|Object} clone If `true`, the input object will be cloned.
 * If `clone` is an object, it will be used as target object.
 * @return {Object} The modified object.
 */
function mapObject(obj, fn, clone) {
    var dst = clone === true ? {} : clone ? clone : obj;
    iterateObject(obj, function (v, n, o) {
        dst[n] = fn(v, n, o);
    });
    return dst;
}

module.exports = mapObject;