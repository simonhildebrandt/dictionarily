"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "deserialize", {
  enumerable: true,
  get: function get() {
    return _trie.deserialize;
  }
});
exports.download = download;
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function get() {
    return _trie.find;
  }
});
Object.defineProperty(exports, "has", {
  enumerable: true,
  get: function get() {
    return _trie.has;
  }
});
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function get() {
    return _trie.toArray;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function get() {
    return _trie.traverse;
  }
});

var _trie = require("@kamilmielnik/trie");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function download() {
  return _download.apply(this, arguments);
}

function _download() {
  _download = _asyncToGenerator(function* () {
    const response = yield fetch('https://dictionarily-6d1a5.web.app/wordsets/sowpods.trie');
    return (0, _trie.deserialize)(yield response.text());
  });
  return _download.apply(this, arguments);
}