
import Skeleton from "./Skeleton"
import Sweep from "./Sweep"
import Image from '@/assets/image.jpg'


function App() {

  return (
    <div>
      <Sweep>
        <Skeleton />
      </Sweep>

      <Sweep lightWidth={40} lightBg="rgba(255,255,255,0.5)" lightDegree="45deg">
        <img src={Image} alt="Image" style={{ width: '100%', marginTop: 16 }} />
      </Sweep>
    </div>
  )
}

export default App
