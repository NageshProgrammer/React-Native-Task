🚀 CRM Leads App – React Native CLI

A simple and clean CRM Leads Mobile Application built using React Native CLI as part of the technical assignment.

The application fetches user data from a public API and displays it in a structured, searchable leads list.

📱 Features

✅ Fetch leads from public API

✅ Display leads using FlatList

✅ Client-side search functionality

✅ Click-to-call using React Native Linking API

✅ Clean, modular folder structure

✅ Functional components with React Hooks

🌐 API Used
https://dummyjson.com/users

🧱 Project Structure
CRMLeadsApp
│
├── android
├── ios
├── src
│   ├── components
│   │   └── LeadItem.js
│   ├── screens
│   │   └── LeadsScreen.js
│   └── services
│       └── api.js
│
├── App.js
├── index.js
├── package.json
└── README.md

🛠 Tech Stack

React Native CLI

JavaScript (ES6+)

React Hooks (useState, useEffect)

FlatList

Linking API

Android (Gradle Build System)

📦 Installation
1️⃣ Clone the Repository
git clone https://github.com/NageshProgrammer/CRMLeadsApp.git
cd CRMLeadsApp

2️⃣ Install Dependencies
npm install

▶️ Running the Application
✅ Prerequisites

Make sure you have:

Node.js (v20+)

JDK 17

Android Studio installed

Android SDK configured

Emulator running OR physical Android device connected

🔹 Start Metro Bundler
npx react-native start

🔹 Run on Android

In a new terminal:

npx react-native run-android

🔍 Implementation Details

Data fetching handled inside useEffect

Application state managed with useState

Search filters the locally stored leads list

Call functionality implemented using:

Linking.openURL(`tel:${phone}`)


Reusable UI component: LeadItem

Main screen: LeadsScreen

🎯 Assignment Objectives Covered

✔ Clean UI implementation

✔ Proper component structure

✔ API integration

✔ React Hooks usage

✔ Client-side search filtering

✔ Mobile-friendly UX design
