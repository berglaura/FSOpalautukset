import React from 'react'

export const Notification = ({ message, errorMessage }) => {
    if (message === null && errorMessage === null) {
        return null
    } else if (message !== null && errorMessage === null) {
        return (
            <div className="message">
                {message}
            </div>
        )
    } else {
        return (
            <div className="error">
                {errorMessage}
            </div>
        )
    }
}
