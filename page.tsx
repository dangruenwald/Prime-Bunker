
import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import MapBlock from '@/components/MapBlock'

export default function Page() {
  return (<>
    <Hero title="About Prime Bunker" subtitle="Built by traders who still believe in the handshake." />
    <ServiceCards />
    <MapBlock />
  </>)
}
