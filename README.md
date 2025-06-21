 [![Netlify Status](https://api.netlify.com/api/v1/badges/0403ba24-2e63-4e62-b001-c4493b5a8043/deploy-status)](https://app.netlify.com/sites/hublu-dublu/deploys)

# Hablu's Comeback: A Gamified Life Transformation App

## 🚀 Overview

**Hablu's Comeback** is a full-stack web application developed during the BAIUST CSE Fest Hackathon 2025. Inspired by the story of Hablu, a student striving to improve various aspects of his life, this app gamifies personal development through structured missions, encouraging users to enhance their academic performance, acquire new skills, and improve overall well-being.

## 🧠 Motivation

The project draws inspiration from the fictional narrative of Hablu, a student at Palak University of Science and Technology (PUST), who embarks on a journey of self-improvement after facing personal challenges. The app is designed to assist users like Hablu in transforming their lives by setting and achieving goals across multiple domains.

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Deployment:** Netlify (Frontend), Render (Backend)

## 📁 Project Structure

```
Hackathon_baiust_cse_fest/
├── Client/                 # Frontend source code
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── Server/                 # Backend source code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .gitignore
├── README.md
└── package.json
```

## 🌟 Features

* **User Authentication:** Secure login using JWT.
* **Dashboard:** Centralized view displaying progress across various missions.
* **Missions:**

  * **Save Your CGPA:** Track and improve academic performance.
  * **Learn New Skills:** Set goals to acquire new competencies.
  * **Dress Better:** Receive fashion advice tailored to personal preferences.
  * **Job Hunt:** Search and apply for job opportunities.
  * **Run Hablu, Run!:** Prepare for marathons with tailored training plans.
  * **Find a Gym Friend:** Locate nearby gyms and potential workout partners.
  * **Pick a Movie:** Get movie recommendations to unwind.
  * **Random Fun Fact:** Learn interesting facts to share.
  * **Study Together:** Coordinate group study sessions.
  * **Mood Tracker:** Monitor emotional well-being over time.

## 📡 API Endpoints

* **Authentication:**

  * `POST /auth/login` - Authenticate existing user(Though it is for Hablu only, there is no registration api).

* **CGPA Management:**

  * `GET /cgpa` - Retrieve current CGPA.
  * `POST /cgpa/update` - Update CGPA information.

* **Skill Development:**

  * `GET /skills` - List acquired skills.
  * `POST /skills/add` - Add a new skill.

* **Job Opportunities:**

  * `GET /jobs` - Fetch available job listings.
  * `POST /applied-jobs` - Submit job applications.

* **Fashion Advice:**

  * `GET /fashion` - Receive personalized fashion tips.

* **Movie Recommendations:**

  * `GET /movies` - Get a list of recommended movies.

* **Fun Facts:**

  * `GET /fun-facts` - Retrieve random fun facts.

* **Study Schedule:**

  * `GET /schedule` - View study timetable.
  * `POST /focus` - Log focus sessions.

* **Mood Tracking:**

  * `GET /mood` - View mood history.
  * `POST /mood/checkin` - Record current mood.

* **Gym & Marathon:**

  * `GET /gyms` - Find nearby gyms.
  * `GET /gymbros` - Locate potential gym partners.
  * `GET /marathon` - Access marathon training resources.

* **Dashboard:**

  * `GET /hero-dashboard` - View overall progress and statistics.

## 🔐 Authentication & Security

* Utilizes JWT for secure authentication.
* Middleware to protect sensitive routes.


## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Moneemabdullah/Hackathon_baiust_cse_fest.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Hackathon_baiust_cse_fest
   ```

3. **Install dependencies for both frontend and backend:**

   ```bash
   cd Client
   npm install
   cd ../Server
   npm install
   ```

4. **Configure environment variables:**

   * Create a `.env` file in the `Server` directory with the following:

     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. **Run the development servers:**

   * **Backend:**

     ```bash
     cd Server
     npm start
     ```
   * **Frontend:**

     ```bash
     cd Client
     npm start
     ```

## 🚀 Deployment

* **Frontend:** Deployed on Netlify - [hublu-dublus.netlify.app](https://hublu-dublus.netlify.app/)
* **Backend:** Deployed on Render - [https://render.com](https://hablu-dablu.onrender.com)

## 👥 Team Members

* **Kahled Bin Joha** - [GitHub](https://github.com/joha546)
* **Moneem Abdullah** - [GitHub](https://github.com/Moneemabdullah)
* **Sirat Ahmed** - [GitHub](https://github.com/sirat2001)
* **Rifat Hossain** - [GitHub](https://github.com/rifatbroh)

## 🏆 Achievements

* **Champion** - BAIUST CSE Fest Hackathon 2025
