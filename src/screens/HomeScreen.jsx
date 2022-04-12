import React, { Component } from 'react'

export default function Home({ onEmail, onLogout }) {
  return (
    <div>
      <div style={{ float: 'right' }}>
        <button className="button-17" role="button" onClick={() => onLogout()}>
          Logout
        </button>
      </div>

      <div className={'styleLoginForm'}>
        <h1 style={{ color: '#8e3ea0' }}>Welcome!!</h1>
        <div style={{ color: 'white' }}>{onEmail}</div>
        <br />
        <br />
        <div className={'shadow'} />
        <div className={'bowl'}>
          {' '}
          <div className={'liquid'}></div>
        </div>
      </div>
    </div>
  )
}
