import Image from 'next/image'

const Avatar = ({ name, src }) => {
  return (
    <Image
      src={src}
      className="mr-4 h-10 w-10 rounded-full sm:h-8 sm:w-8"
      alt={name}
      width={40}
      height={40}
    />
  )
}

export default Avatar
