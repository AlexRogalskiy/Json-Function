"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeCheck=require("./type-check"),renameKeys=function(a){var b=Object.entries(a).map(function(a){var b=a[0],c=a[1];return[b.replace(/_(.)/g,function(a){return a[1].toUpperCase()}),processVal(c)]}),c={};return b.forEach(function(a){var b=a[0],d=a[1];c[b]=d}),c},processVal=function(a){return a&&"object"===("undefined"==typeof a?"undefined":_typeof(a))?(0,_typeCheck.isArray)(a)?a.map(renameKeys):renameKeys(a):a},transform=function(a){return(0,_typeCheck.isArray)(a)?a.map(function(a){return renameKeys(a)}):[]};exports.default=transform;