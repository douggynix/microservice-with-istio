const express = require('express');
//const cors = require('cors')
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');


// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const BACKEND_A_URI = process.env.BACKEND_A_URI || "http://localhost:3001";
const BACKEND_B_URI = process.env.BACKEND_B_URI || "http://localhost:3002";

//Allow Cross Origin Request (CORS) for our local proxy
//app.use(cors())
console.log(`Proxy Target BACKEND_A_URI=${BACKEND_A_URI}`)
console.log(`Proxy Target BACKEND_B_URI=${BACKEND_B_URI}`)
// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a custom proxy service to service frontend app for local develoment');
 });

 app.use('/backendA', createProxyMiddleware({
    target: BACKEND_A_URI,
    changeOrigin: false,
    pathRewrite: {
        [`^/backendA`]: '/',
    },
 }));

 app.use('/backendB', createProxyMiddleware({
    target: BACKEND_B_URI,
    changeOrigin: false,
    pathRewrite: {
        [`^/backendB`]: '/',
    },
 }));
 
 app.use('/', createProxyMiddleware({
    target: 'http://localhost:3030',
    changeOrigin: true,
    pathRewrite: {
        [`^/`]: '/',
    },
 }));

 const runProxyServer = () => {
    // Start the Proxy
    app.listen(PORT, () => {
        console.log(`Starting Proxy at port ${PORT}`);
    });
 }

 module.exports = {runProxyServer}