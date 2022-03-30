// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const usernameInputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    const value = usernameInputRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
    event.preventDefault()
    const input = event.target.value
    const isValid = input === input.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={event => handleChange(event)}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
