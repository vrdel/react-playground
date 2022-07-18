import React from 'react'
import { Navbar } from 'reactstrap'


const Footer = () => {
  let dateObj = new Date()
  let year = new Intl.DateTimeFormat('hr-HR', {year: 'numeric'}).format(dateObj)
  let month = new Intl.DateTimeFormat('hr-HR', {month: 'numeric'}).format(dateObj)
  let day = new Intl.DateTimeFormat('hr-HR', {day: 'numeric'}).format(dateObj)

  return (
    <Navbar color="light" expand="md" fixed="bottom">
      <p className="fs-6 fst-italic position-relative start-50">
        {day}{month}{year}
      </p>
      <p className="fs-6 fst-italic position-relative end-0">
        dvrcic
      </p>
    </Navbar>
  )
}

export default Footer
