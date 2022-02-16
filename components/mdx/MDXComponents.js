import Image from 'next/image'

const MDXComponents = {
  img: props => <Image alt={'gooz'} {...props} />,
  Image
}

export default MDXComponents
