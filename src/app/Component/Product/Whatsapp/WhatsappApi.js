
import Home from './Home'
import Client from './Clients'
import ComparisonTable from './ComparisonTable'
import WhatsappPricing from './WhatsappPricing'
import Apisupport from './Apisupport'
import StepsSection from './StepsSection'
import Features from './Features'
import SocialMedia from './SocialMedia'
import FAQHome from '../../Resources/Faq/FAQHome'
import { Whatsapp } from '../../Resources/Faq/FaqData'

const WhatsappApi = () => {
  return (
    <div>
        <Home/>
        <Client/>
        <ComparisonTable/>
        <WhatsappPricing/>
        <Apisupport/>
        <StepsSection/>
        <Features/>
        <SocialMedia/>
        <FAQHome data={Whatsapp} />
    </div>
  )
}

export default WhatsappApi