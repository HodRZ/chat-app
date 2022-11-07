'use strict';

const express = require('express');
const socket = require('socket.io');
const cors = require('cors');


module.exports = {
    PORT: process.env.PORT,
    cors,
    express,
    socket
};