# Fitness Tracker - Made with Angular 8

Demo: [https://angular-fitness-tracker-668f8.firebaseapp.com](https://angular-fitness-tracker-668f8.firebaseapp.com)

## Prerequisites

Works with **Node.js** interpreter version **10.16.0**.

[**Yarn**](https://yarnpkg.com/en/docs/install) or [**NPM**](https://www.npmjs.com/get-npm) package manager must be installed in the system. 

[**Firebase**](https://firebase.com/) account. Free Spark Plan works.

## Installation

After cloning the project, install its dependencies with this command:

```bash
yarn install
```

## Creating a Firebase Project

1. Go to [**Firebase Console**](https://console.firebase.google.com) and create your own project.
2. In the project console go to **Project Settings** and copy firebase project setting to the **src/environments/environments.ts** file.
3. Go to **Database** that is located under project console navigation group and create **Cloud Firestore**.
4. In the **Cloud Firestore** create **availableExercises** collection and add some items with the next fields:
    - name: *(string)*
    - calories: *(number)*
    - duration: *(number)*
5. Go to **Authentication** that is also located under project console navigation group and set up **Email/Password** sign-in method.
6. Deploy the application by running `firebase deploy`

## Running locally

To run the app for local development use this command:

```bash
yarn start
```
This will start the development server (typically on the `localhost:4200`) which will force browser to reload each time you change the source code.
