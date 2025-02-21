import React from 'react'
import FAQHome from './FAQHome';
import { Whatsapp, voicecall,bulkSmsData,RcsData } from "./FaqData";
const Faq = () => {
  return (
    <div>
        <FAQHome data={Whatsapp}/>
       <FAQHome data={RcsData}/>
       <FAQHome data={voicecall}/>
       <FAQHome data={bulkSmsData}/>
    </div>
  )
}

export default Faq