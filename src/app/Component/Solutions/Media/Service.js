import React from 'react'
import { MediaAndEntertainment,MediaTimeline,WhyChooseMedia,MediaFAQ } from './JsonData'
import ServiceHome from '../ServiceHome'
import Timeline from '../Timeline'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>
        <ServiceHome data={MediaAndEntertainment} />
        <Timeline data={MediaTimeline} />
        <WhyChoose data={WhyChooseMedia} />
        <SolutionFaq data={MediaFAQ}/>
      
    </div>
  )
}

export default Service
