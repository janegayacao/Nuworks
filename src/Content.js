import React from 'react'
import Filter from './Filter'
import MainContent from './MainContent'
import './main.scss'
import './res.scss'

export default function Content() {
  return (
    <div class="container">
      <Filter />
      <MainContent />
    </div>
  )
}
