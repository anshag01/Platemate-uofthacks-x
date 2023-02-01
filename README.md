# PlateMate

Built at UofTHacks X; 3rd place winner of the Cohere - Best Build With Cohere Challenge.

![PlateMate logo](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/351/619/datas/original.png)

## 💡 Inspiration
Meeting new people is an excellent way to broaden your horizons and discover different cuisines. Dining with others is a wonderful opportunity to build connections and create new friendships. In fact, eating alone is one of the primary causes of unhappiness, second only to mental illness and financial problems. Therefore, it is essential to make an effort to find someone to share meals with. By trying new cuisines with new people and exploring new neighbourhoods, you can make new connections while enjoying delicious food.

## ❓ What it does
PlateMate is a unique networking platform that connects individuals in close proximity and provides the setup of an impromptu meeting over some great food! It enables individuals to explore new cuisines and new people by using Cohere to process human-written text and discern an individual’s preferences, interests, and other attributes. This data is then aggregated to optimize a matching algorithm that pairs users. Along with a matchmaking feature, PlateMate utilizes Google APIs to highlight nearby restaurant options that fit into users’ budgets. The app’s recommendations consider a user’s budget to help regulate spending habits and make managing finances easier. PlateMate takes into account many factors to ensure that users have an enjoyable and reliable experience on the platform.

## 🚀 Exploration
PlateMate provides opportunities for exploration by expanding social circles with interesting individuals with different life experiences and backgrounds. You are matched to other nearby users with similar cuisine preferences but differing interests. Restaurant suggestions are also provided based on your characteristics and your match’s characteristics. This provides invaluable opportunities to explore new cultures and identities. As the world emerges from years of lockdown and the COVID-19 pandemic, it is more important than ever to find ways to reconnect with others and explore different perspectives.

## 🧰 How we built it
**React, Tailwind CSS, Figma**: The client side of our web app was built using React and styled with Tailwind CSS based on a high-fidelity mockup created on Figma.

**Express.js**: The backend server was made using Express.js and managed routes that allowed our frontend to call third-party APIs and obtain results from Cohere’s generative models.

**Cohere**: User-specific keywords were extracted from brief user bios using Cohere’s generative LLMs. Additionally, after two users were matched, Cohere was used to generate a brief justification of why the two users would be a good match and provide opportunities for exploration.

**Google Maps Platform APIs**: The Google Maps API was used to display a live and dynamic map on the homepage and provide autocomplete search suggestions. The Google Places API obtained lists of nearby restaurants, as well as specific information about restaurants that users were matched to.

**Firebase**: User data for both authentication and matching purposes, such as preferred cuisines and interests, were stored in a Cloud Firestore database.

## 🤔 Challenges we ran into
* Obtaining desired output and formatting from Cohere with longer and more complicated prompts
* Lack of current and updated libraries for the Google Maps API
* Creating functioning Express.js routes that connected to our React client
* Maintaining a cohesive and productive team environment when sleep deprived

## 🏆 Accomplishments that we're proud of
* This was the first hackathon for two of our team members
* Creating a fully-functioning full-stack web app with several new technologies we had never touched before, including Cohere and Google Maps Platform APIs
* Extracting keywords and generating JSON objects with a high degree of accuracy using Cohere

## 🧠 What we learned
* Prompt engineering, keyword extraction, and text generation in Cohere
* Server and route management in Express.js
* Design and UI development with Tailwind CSS
* Dynamic map display and search autocomplete with Google Maps Platform APIs
* UI/UX design in Figma
* REST API calls

## 👉 What's next for PlateMate
* Provide restaurant suggestions that are better tailored to users’ budgets by using Plaid’s financial APIs to accurately determine their average spending
* Connect users directly through an in-app chat function
* Friends and network system
* Improved matching algorithm
