![build](https://github.com/esmalleydev/srating.io-gui/actions/workflows/build.js.yml/badge.svg)
![version](https://img.shields.io/github/package-json/v/esmalleydev/srating.io-docs)
# [docs.srating.io](https://docs.srating.io)

This is the open-source GUI project for [docs.srating.io](https://docs.srating.io). This project uses [nextjs](https://nextjs.org/), [reactjs](https://reactjs.org/) and [nextra](https://nextra.site).

Prerequisites: Nodejs, npm.

## Set up

After cloning project, in the project directory run:
`npm install`

To start developing run:
`npm run dev`

This project is a API documentation for [srating.io](https://srating.io)

Contribute to the open-source [srating.io GUI Github](https://github.com/esmalleydev/srating.io-gui)

### Tips
May need to clear out .next folder before rebuilding
`rm -r .next`

### pm2
`pm2 start npm --name "docs" -- start`
