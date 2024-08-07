# HodlInfo

HodlInfo is a web application that displays the latest cryptocurrency trading information from multiple platforms. This project uses Node.js, Express, MongoDB, and Axios to fetch data from the WazirX API and display it on a front-end built with HTML, CSS, and JavaScript.

## Features

- Fetches top 10 cryptocurrency trading data from the WazirX API
- Stores the data in MongoDB
- Displays the data in a table format on the front-end
- Automatically updates data every hour

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chetan-Jalandharia/hodlinfo.git
   cd hodlinfo
   ```
2. Install the required Node.js packages:

   ```
   npm install
   ```

3. Start the Node.js server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   
http://localhost:3000

## Project Structure
index.js: Main server file that sets up Express, connects to MongoDB, and fetches data from the WazirX API.
public/index.html: HTML file for the front-end.
public/styles.css: CSS file for styling the front-end.
public/script.js: JavaScript file for fetching data from the server and populating the HTML table.

## Dependencies
express: Fast, unopinionated, minimalist web framework for Node.js
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
axios: Promise based HTTP client for the browser and Node.js
