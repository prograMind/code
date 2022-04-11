import Head from 'next/head'
import Image from 'next/image'
import LandingPage from './landing'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <h1>My App</h1>
      <a href="./landing">Landing Page</a>
    </div>
  )
}
