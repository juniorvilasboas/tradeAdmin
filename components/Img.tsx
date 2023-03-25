import Image from 'next/image'

interface Props {
  src: string
  alt: string
  w: string
  h: string
  css?: string
}

const Img = ({ src, alt, w, h, css }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={css}
      layout='fixed'
    />
  )
}

export default Img
