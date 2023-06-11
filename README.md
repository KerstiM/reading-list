# reading-list

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Firebase backend project
Create a project in `console.firebase.google.com` -> Add project -> `Firebase9 reading list` -> Continue -> Create

#### Connect firebase project with front end project
On the dashboard click `</>` (Web) button.
Register app
Hosting can be set up later
You can install Firebase later (`npm install firebase`)
Settings -> copy config object

#### Enable Firestore database
Cloud Firestore -> create database -> start in test mode -> choose location -> enable

#### Create config file in front end project
Create `firebase` folder in `src`
Create `config.js` :

```
  import { initializeApp } from 'firebase/app'
  import { getFirestore } from 'firebase/firestore'

  Paste config object

  // init firebase
  initializeApp(firebaseConfig)
  // init services
  const db = getFirestore()
  
  export { db}
```

install Firebase -> `npm install firebase`


Create a new collection in Cloud Firestore
Add initial documents and use auto-id


