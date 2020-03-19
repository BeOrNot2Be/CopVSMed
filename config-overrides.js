/** @format */
/* eslint-disable import/no-extraneous-dependencies */

const { useBabelRc, override } = require("customize-cra");

module.exports = override(useBabelRc());
