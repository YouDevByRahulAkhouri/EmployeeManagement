import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import DetailedPage from './DetailedPage'

export default function Home(props) {
    const { match: { path } } = props
    return (
        <div>
            <h1> welcome home!</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'cadetblue', color: 'whitesmoke' }}>
                <Link to={`${path}`}><h1> home</h1></Link>
                <Link to={`${path}/profile`}><h1> profile</h1></Link>
                <Link to={`${path}/setting`}><h1> setting</h1></Link>
                <Link to={`${path}/contact`}><h1> contact</h1></Link>
            </div>
            <div style={{ marginTop: '10%' }}>
                <p>default</p>
                {/* <Route path={`${path}/:id`} component={DetailedPage} /> */}
            </div>
        </div>
    )
}
