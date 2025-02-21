import React from 'react'
import { GamingService, WhyChooseGaming, GamingFAQ, GamingTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import Timeline from '../Timeline'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>
      <ServiceHome data={GamingService} />
      <Timeline data={GamingTimeline}/>

      <WhyChoose data={WhyChooseGaming} />
      <SolutionFaq data={GamingFAQ}/>

    </div>
  )
}

export default Service
