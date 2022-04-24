import React, { Component, useState } from 'react'
//screen & components imports
import Login from './screens/LoginScreen'
import Register from './screens/RegisterScreen'
import Home from './screens/HomeScreen'
import './styles/login.css'

//Firebase imports
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBvnig1VQ9QnpxyxkcdNQlOYuGLnArP3zY',
  authDomain: 'flexxinhub.firebaseapp.com',
  projectId: 'flexxinhub',
  storageBucket: 'flexxinhub.appspot.com',
  messagingSenderId: '263228247178',
  appId: '1:263228247178:web:8b5b499b5120be5c917173',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()

//Main Function
function App() {
  //User info variables
  const [strIsSignedUp, setStrIsSignedUp] = useState('null')
  const [strEmail, setStrEmail] = useState('')
  const [strPassword, setStrPassword] = useState('')

  //Login Function
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('Login successful!')
        setStrPassword('')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Error')
        setStrPassword('')
      })
  }

  //Logout Function
  const handleLogout = () => {
    auth
      .signOut()
      .then(function () {
        console.log('User was logout!')
        setStrIsSignedUp('false')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //check if user is singed up just once
  if (strIsSignedUp === 'null') {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log('User is here!')
        setStrEmail(user.email)
        setStrIsSignedUp('true')
      } else {
        console.log('User is not singed up')
        setStrIsSignedUp('false')
      }
    })
  }

  //open home or login-regis page by user info
  if (strIsSignedUp === 'true') {
    return (
      <div className={'styleBodyForm'}>
        <Home onEmail={strEmail} onLogout={handleLogout} />
      </div>
    )
  } else if (strIsSignedUp === 'false') {
    return (
      <div className={'styleBodyForm'}>
        <Login
          onEmail={strEmail}
          onSetEmail={setStrEmail}
          onPassword={strPassword}
          onSetPassword={setStrPassword}
          onLogin={handleLogin}
        />
      </div>
    )
  }
}

export default App
