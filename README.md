# Jammming Project

======================

https://github.com/user-attachments/assets/ba72bb27-004c-48a9-91b8-da4bef806bf9

> Note: The demo will not work! since it uses spotify api in development mode, which limits access to general user.

## Purpose

---

Jammming is a web application that allows users to create and manage playlists on Spotify. The project aims to provide a simple and intuitive interface for users to interact with the Spotify API and create playlists based on their favorite tracks.

## Technologies Used

---

- Frontend: React, JavaScript, HTML, CSS
- Backend: Spotify Web API
- Authentication: OAuth 2.0
- Storage: LocalStorage
- State Management: Redux
- Routing: react-router-dom

## Features

---

- User authentication with Spotify using OAuth 2.0
- Search for tracks on Spotify
- Preview track
- Create playlists
- Add tracks to playlists

## Getting Started

---

To run the application, follow these steps:

1. Clone the repository
2. Install dependencies using `npm install`
3. Start the application using `npm start`
4. Open the application in your web browser at `http://localhost:3000`

Note: You will need to have a Spotify account and a Spotify developer account to use the application. You will also need to replace the `CLIENT_ID` variable in the `src/config/index.js` file function with your own client ID.

### How to share the app with others?

You can ask Spotify to move your app from development mode into extended quota mode.

## Future Work

---

- [ ] Implement error handling and debugging for API requests
- [ ] Add functionality to remove tracks from playlists
- [ ] Improve user interface and user experience
- [ ] Refactor CSS stylesheets
