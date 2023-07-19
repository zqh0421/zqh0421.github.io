const DownloadCV = (props: { className?: string}) => {
  return (
    <div className={`downloadCV ${props.className}`}>
      <button className="border-transparent border-solid border-[1px] px-6 py-3 cursor-pointer transition-colors hover:border-[#646cff] bg-base-200" ><a target="_blank" href="https://drive.google.com/file/d/1h_XRQjizTTwRxbRRHvxCuOTYPoCwic8C/view?usp=share_link">Download Qianhui's Resume</a></button>
    </div>
  )
}

export default DownloadCV;