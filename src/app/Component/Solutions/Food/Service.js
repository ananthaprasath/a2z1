import React from 'react'
import { FoodAndBeverage, FoodTimeline,WhyChooseFood,FoodFAQ } from './JsonData'
import ServiceHome from '../ServiceHome'
import Timeline from '../Timeline'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionsFAQ'

const Service = () => {
  return (
    <div>
      <ServiceHome data={FoodAndBeverage}/>
      <Timeline data={FoodTimeline} />
      <WhyChoose data={WhyChooseFood}/>
      <SolutionFaq data={FoodFAQ} />

    </div>
  )
}

export default Service
