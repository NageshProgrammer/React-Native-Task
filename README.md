CRM Leads App (React Native CLI)

This project is a React Native CLI application that implements a CRM Leads List screen as part of the technical assignment.

The application fetches user data from a public API and displays it in a clean, structured, and searchable list UI.

🚀 Features

Fetches leads from:
https://dummyjson.com/users

Displays leads using FlatList

Client-side search filtering

Call button using React Native Linking API

Clean and modular folder structure

Functional components with React Hooks

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
└── package.json

🛠 Tech Stack

React Native CLI

JavaScript (Functional Components)

React Hooks (useState, useEffect)

FlatList

Linking API

Android (Gradle)

📦 Installation
1️⃣ Clone the repository
git clone <repository-url>
cd CRMLeadsApp

2️⃣ Install dependencies
npm install

▶️ Running the App
Android

Make sure you have:

Node 20+

JDK 17

Android Studio installed

Android SDK configured

An emulator running or a physical device connected

Then run:

npx react-native start


Open a new terminal:

npx react-native run-android

🔍 Implementation Details

Data is fetched using fetch() inside useEffect

State is managed using useState

Search functionality filters locally from fetched data

Call button uses:

Linking.openURL(`tel:${phone}`)


UI designed with clean spacing and reusable component (LeadItem)

📱 Assignment Notes

This project focuses on:

Clean UI implementation

Proper component separation

React Hooks usage

Client-side filtering

Mobile UX structure
