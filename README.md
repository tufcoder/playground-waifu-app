# Waifu App

This is a project that uses the `waifu.pics` API with `React` and `JavaScript`.

Select a `category` from the dropdown list and click the `Generate` button.

Wait for the content to load.

## How to run this project

On a local machine, follow the steps below:

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine. You can check the versions with the commands `node -v` and `npm -v` (or `yarn -v`).

### Backend

1.  Navigate to the `nodejs-backend` folder:

    ```sh
    cd nodejs-backend
    ```

2.  Install dependencies:

    ```sh
    npm install  # Or yarn install
    ```

3.  Start the backend:

    ```sh
    npm run dev
    ```

    The backend will be available at `http://localhost:1337`.

### Frontend

1.  Navigate to the `react-frontend` folder:

    ```sh
    cd react-frontend
    ```

2.  Install dependencies:

    ```sh
    npm install # Or yarn install
    ```

3.  Start the frontend:

    ```sh
    npm start
    ```

    The frontend will be available at `http://localhost:3000`.

## Technologies Used

*   **Frontend:** React, JavaScript, Axios, File-Saver, Phosphor React
*   **Backend:** Node.js, Express, Axios, Cors, Nodemon (dev)
*   **API:** [waifu.pics](https://waifu.pics/docs)

## Features

*   Category selection
*   Generation of images in Cards
*   Download image
*   Link to image 