import React from 'react'
import { GovernmentMessagingServices, WhyChooseGovernmentMessaging,GovernmentTimelineUpdates,GovernmentFAQContent } from './JsonData'
import ServiceHome from '../ServiceHome'
import Timeline from '../Timeline'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>

    <ServiceHome data={GovernmentMessagingServices} />
    <Timeline data={GovernmentTimelineUpdates} />
    <WhyChoose data={WhyChooseGovernmentMessaging} />
    <SolutionFaq data={GovernmentFAQContent} />
      
    </div>
  )
}

export default Service
