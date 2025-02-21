import React from 'react'
import { EducationServices, WhyChooseEducation,EducationFAQ,EducationTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import Timeline from '../Timeline'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>
        <ServiceHome data={EducationServices} />
        <Timeline data={EducationTimeline} />
        <WhyChoose data={WhyChooseEducation} />
        <SolutionFaq data={EducationFAQ} />
 
      
    </div>
  )
}

export default Service
