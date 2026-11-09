# CS2 Player Tracker

**Author:** Elvin Hasanli

## Description

CS2 Player Tracker is a responsive React web application built with Vite and Bootstrap. It enables Counter-Strike 2 esports fans to search for pro players using live data, save their favorite players to a local watchlist, and view upcoming competitive CS2 matches in real time.

## Features

* **Player Search:** Search pro CS2 players by handle/name with live data fetched from the PandaScore API.
* **Watchlist:** Save favorite players locally (`localStorage`) and manage them directly from a dedicated Watchlist view.
* **Upcoming Matches:** Browse live and upcoming CS2 matches along with tournament details and schedules.
* **Responsive Dark UI:** Designed using Bootstrap 5 component cards and utilities for a clean, gaming-focused interface.
* **Client-Side Routing:** Single Page Applicationnavigation using React Router.

## Technologies Used

* **Frontend:** React, React Router
* **Build Tool:** Vite
* **Styling:** Bootstrap 5
* **API:** PandaScore REST API (CS2/CS:GO endpoints)
* **Storage:** Browser `localStorage`

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ElvinHasanli/hasanli_elvin_final-project.git
   cd hasanli_elvin_final-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of the project and add your PandaScore API key:
   ```env
   VITE_PANDASCORE_KEY=your_pandascore_api_key_here
   ```
   *(Note for grader: I will include API key in mooodle submission folder.)*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will start locally at `http://localhost:5173`.