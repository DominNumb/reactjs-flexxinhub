import React, { Component, useState } from 'react'
import '../styles/login.css'

export default function Register({
  onRegister,
  onEmail,
  onSetEmail,
  onPassword,
  onSetPassword,
}) {
  return (
    <section>
      <center>
        <div>
          <h1 style={{ color: '#8e3ea0' }}>FlexxinHub Register</h1>
        </div>
        <div>
          <input
            placeholder={'Email'}
            onChange={(event) => onSetEmail(event.target.value)}
            value={onEmail}
            name="inpEmail"
          ></input>
        </div>
        <div>
          <input
            type={'password'}
            placeholder={'Password'}
            onChange={(event) => onSetPassword(event.target.value)}
            value={onPassword}
            name="inpPassword"
          ></input>
        </div>
        <div>
          <button onClick={() => onRegister(onEmail, onPassword)}>
            Register
          </button>
        </div>
      </center>
    </section>
  )
}
