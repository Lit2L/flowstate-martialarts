export default function PostVideo() {
  return (
    <div className='h-full w-full'>
      <video
        src='/video/phonevideo.mp4'
        autoPlay
        loop
        controls
        muted
        playsInline
        className='h-full w-full object-cover sm:hidden'
      />
      <video
        src='/video/video.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='hidden h-full w-full object-cover sm:block'
      />
    </div>
  )
}
