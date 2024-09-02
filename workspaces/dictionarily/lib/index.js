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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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