import React, { Component, useState } from 'react'
//import '../styles/login.css'

export default function Login({
  onLogin,
  onEmail,
  onSetEmail,
  onPassword,
  onSetPassword,
}) {
  return (
    <div className={'styleLoginForm'}>
      <div>
        <h1 style={{ color: '#8e3ea0' }}>FlexxinHub</h1>
      </div>
      <div>
        <input
          placeholder={'Email'}
          onChange={(event) => onSetEmail(event.target.value)}
          value={onEmail}
          name="inptEmail"
        ></input>
      </div>
      <div>
        <input
          type={'password'}
          placeholder={'Password'}
          onChange={(event) => onSetPassword(event.target.value)}
          value={onPassword}
          name="inptPassword"
        ></input>
      </div>
      <div>
        <button
          className="button-17"
          role="button"
          onClick={() => onLogin(onEmail, onPassword)}
        >
          Login
        </button>
      </div>
      <div>
        <strong>Little help</strong>
        <p>email: test@gmail.com</p>
        <p>pass: test123</p>
        <p>Webpage will remember that you are signed up, even after refresh</p>
      </div>
    </div>
  )
}
