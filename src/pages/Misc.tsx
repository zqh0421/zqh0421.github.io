import { Link } from 'react-router-dom'
import Block from '../components/Block'
import MultiCol from '../components/MultiCol'
const Misc = () => {
  return (
    <div className="misc max-w-[80vw] mx-auto my-0 [&>h3]:my-10 [&>*]:text-left [&>p]:my-8">
      <h3 className='h3'>All about Music&Art</h3>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Beijing, China</h4>
          <h4 className='h4'>Jun, 2023</h4>
        </MultiCol>
        <p>Participated in outdoor graduation performance! Best memories with my friends (most of whom graduated this year...)</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Qingdao&Beijing, China</h4>
          <h4 className='h4'>2020 - 2023</h4>
        </MultiCol>
        <p>Audio & Video Editing</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Beijing, China</h4>
          <h4 className='h4'>2019 - 2021</h4>
        </MultiCol>
        <p>Arranged music for choir programs.</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Beijing, China</h4>
          <h4 className='h4'>2019 - 2021</h4>
        </MultiCol>
        <p>Played the piano for the chorus.</p>
      </Block>

      <h3 className='h3'>Travel</h3>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Notre Dame, the US</h4>
          <h4 className='h4'>Jul, 2023 - Aug, 2023</h4>
        </MultiCol>
        <p>Slow-pace life!</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Chicago, the US</h4>
          <h4 className='h4'>Jul, 2023</h4>
        </MultiCol>
        <p>City walk.</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Abu Dhabi, UAE</h4>
          <h4 className='h4'>Jul, 2023</h4>
        </MultiCol>
        <p>A 26-hour stopover between Beijing and Chicago.</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Seoul, Korea</h4>
          <h4 className='h4'>Jun, 2023</h4>
        </MultiCol>
        <p>My first international trip after the pandemic!🤩</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Beijing, China</h4>
          <h4 className='h4'>2019 - 2023</h4>
        </MultiCol>
        <p>Having been studied here for 4 years...</p>
      </Block>
      <Block>
        <MultiCol>
          <h4 className='h4'>📍Qingdao, China</h4>
          <h4 className='h4'>2001 - ♾️️</h4>
        </MultiCol>
        <p>My home!</p>
      </Block>
    </div>
  )
}

export default Misc