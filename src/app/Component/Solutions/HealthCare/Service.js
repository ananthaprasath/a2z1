import React from 'react'
import { HealthcareServices,WhyChooseHealthcare,HealthcareTimeline,HealthcareFAQ } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import Timeline from '../Timeline'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>
      <ServiceHome data={HealthcareServices} />
      <Timeline data={HealthcareTimeline}/>

      <WhyChoose data={WhyChooseHealthcare} />
      <SolutionFaq data={HealthcareFAQ}/>
    </div>
  )
}

export default Service
