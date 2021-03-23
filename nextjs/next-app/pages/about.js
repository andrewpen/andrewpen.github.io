import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const About = () => (
    <div>
        <head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
        </head>

        <Nav />

        <div>
            <h1>Macro Compliance Tracker!</h1>
            <p>
                This app will help you ensure your macros are within a selected range to help you achieve your goal.
            </p>
        </div>
    </div>
)

export default About