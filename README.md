# Description

The purpose behind ShwackCloud is to implement the SoundCloud API
and widget in a progressive web application, built with a mobile first design but also responsive for use in the browser. This project is intended for a group of friends and myself to share music playlists, in a more intimate setting, without all the noise of the regular SoundCloud website.

## Features

- Ability to make your own account, at which point you add the URL to the playlist you want to share with other users on the site.
- Ability to change your profile as well as the associated playlist.
- Able to view others playlists and see any and all updates on each visit.

## Tech Stack

- Front End: React, NextJS
- Back End: Express
- Component Libraries: Grommet, Framer Motion (Animation)
- CSS Preprocessor: Sass
- Deployment: NextJS client and Express server are both containerized with docker, routing is handled by Nginx (also containerized) and all are deployed to AWS Elastic Beanstalk with CircleCI for continuous deployment and integration.

## Screenshots

### Home/Landing page.

https://github.com/mphbo/music-corner/blob/master/client/public/docs/1.png?raw=true

!["Screenshot of MAIN view"](https://github.com/mphbo/music-corner/client/blob/master/public/docs/1.png)

### Beginning of Playlists section.

!["Screenshot of HEADING for Web Projects"](https://github.com/mphbo/music-corner/client/blob/master/public/docs/2.png)

### Example of expanded playlist.

!["Screenshot the Project component"](https://github.com/mphbo/music-corner/client/blob/master/public/docs/3.png)

### Login page.

!["Screenshot of Project Modal component"](https://github.com/mphbo/music-corner/client/blob/master/public/docs/4.png)

### Beginning of help section which helps users troubleshoot.

!["Screenshot of Project Modal component"](https://github.com/mphbo/music-corner/client/blob/master/public/docs/5.png)

## SETUP and RUN with DOCKER for development

Make sure the docker daemon is running and then run the following command:

```sh
docker-compose -f docker-compose-dev.yml up
```

Visit localhost:3000
