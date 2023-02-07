import Image from 'next/image'
import code182 from '@/images/logos/code182.png'

export function Logo(props) {
  return <Image src={code182} alt="Code 182" {...props} />
}
