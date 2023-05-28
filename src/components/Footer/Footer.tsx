import styled from 'styled-components'
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { Github } from '@styled-icons/bootstrap/Github'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react'
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
  const emailAddress = 'zqh0421@hotmail.com'
  const [btnStatus, setBtnStatus] = useState({
    disabled: false,
    text: 'copy'
  })
  
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className='divider' />
        <h2>Contact me!</h2>
        <p className='email'>
          <a href="mailto: zqh0421@hotmail.com"><EmailOutlineIcon /></a>
          <span className='address'>{emailAddress}</span>
          <CopyToClipboard text={emailAddress}
              onCopy={() => {
                setBtnStatus({
                  disabled: true,
                  text: 'success!'
                })
                setTimeout(() => {
                  setBtnStatus({
                    disabled: false,
                    text: 'copy'
                  })
                }, 3000)
              }}>
              <button disabled={btnStatus.disabled}>{btnStatus.text}</button>
          </CopyToClipboard>
        </p>
        <p className='icons'>
          <a href='http://github.com/zqh0421'><GithubIcon /></a>
          {/* <LinkedinWithCircleIcon />
          <InstagramWithCircleIcon /> */}
        </p>
        <p className='copyright'>Copyright © Qianhui Zhao 2023</p>
      </div>
    </div>
  )
}

export default Footer