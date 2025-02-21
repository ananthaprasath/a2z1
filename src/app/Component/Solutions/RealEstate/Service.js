import React from 'react'
import { RealEstate, WhyChooseUs, RealEstateFAQ,RealEstateTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionsFAQ'
import Timeline from '../Timeline'

const Service = () => {
  return (
    <div>
      <ServiceHome data={RealEstate} />
        <Timeline data={RealEstateTimeline} />
        <WhyChoose data ={WhyChooseUs}/>
        <SolutionFaq data={RealEstateFAQ} />
      
    </div>
  )
}

export default Service