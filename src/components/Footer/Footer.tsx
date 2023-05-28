import styled from 'styled-components'
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { Github } from '@styled-icons/bootstrap/Github'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import './Footer.css'

const InstagramWithCircleIcon = styled(InstagramWithCircle)`
  color: #ccc;
  width: 30px;
`

const LinkedinWithCircleIcon = styled(LinkedinWithCircle)`
  color: #ccc;
  width: 30px;
`

const GithubIcon = styled(Github)`
  color: #ccc;
  width: 30px;
`

const EmailOutlineIcon = styled(EmailOutline)`
  color: #ccc;
  width: 30px;
`

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className='divider' />
        <h2>Contact me!</h2>
        <p className='email'><EmailOutlineIcon /><span className='address'>zqh0421@hotmail.com</span></p>
        <p className='icons'>
          <GithubIcon />
          <LinkedinWithCircleIcon />
          <InstagramWithCircleIcon />
        </p>
        <p className='copyright'>Copyright © Qianhui Zhao 2023</p>
      </div>
    </div>
  )
}

export default Footer