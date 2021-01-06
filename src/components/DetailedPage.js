import React from 'react'
import Profile from './Profile'

export default function DetailedPage(props) {
    const { match: { params: { id } } } = props
    console.log(id)
    return (
        <div>
            {(id === 'contact') ? <h1>hey i am from contact us</h1>
                : (id === 'profile') ? <Profile />
                    : (id === 'setting') ? <h1>hey i am from setting</h1> : <h1>hey i am from home</h1>}
        </div>
    )
}
