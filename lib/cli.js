#!/usr/bin/env node
"use strict";

var _mdLinkCli = require("./mdLinkCli.js");

const rout = process.argv[2];
const options = {
  val: process.argv[3],
  stat: process.argv[4]
}; // const valid = process.argv[3];
// const valStatus = process.argv[4];
// mdLinksCli(rout, valid, valStatus).then((res) => console.log(res));

(0, _mdLinkCli.mdLinksCli)(rout, options).then(valor => console.log(valor));