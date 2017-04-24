'use strict'

const config = {
  secret: process.env.GUDIG_SECRET || 'gudig4',
  client: {
    endpoints: {
        pictures: 'http://api.gudig.com/user',
        users: 'http://api.gudig.com/auth'
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
    config.client.endpoints = {
        users: 'http://localhost:5001',
        auth: 'http://localhost:5002'
    }
}

module.exports = config;