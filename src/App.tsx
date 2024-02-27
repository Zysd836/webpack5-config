import { FC, useState } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import Button from './component/button'
import './variable.scss'

const App: FC = () => {
  const [fullname] = useState('Dư Thanh Được')
  console.log(fullname)
  return (
    <div>
      <Button />
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      {/* <h2>Bài viết được viết tại blog {process.env.HOST}</h2> */}
    </div>
  )
}

export default App
