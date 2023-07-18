import styled from 'styled-components'
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import { Github } from '@styled-icons/bootstrap/Github'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react'

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
    <div className="w-full h-min items-center">
      <div className="mt-[120px] mb-[30px] items-center">
        <div className="mx-auto my-[50px] w-[80vw] h-px bg-base-200" />
        <h2 className='h2 mb-[20px]'>Contact me!</h2>
        <p className='m-[20px] items-center'>
          <a className="inline-block m-[20px]" href="mailto: zqh0421@hotmail.com"><EmailOutlineIcon /></a>
          <a href='http://github.com/zqh0421'><GithubIcon /></a>
          {/* <LinkedinWithCircleIcon />
          <InstagramWithCircleIcon /> */}
        </p>
        <p className="text-neutral-300">Copyright © Qianhui Zhao 2023</p>
      </div>
    </div>
  )
}

export default Footer