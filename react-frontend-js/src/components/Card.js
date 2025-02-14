import { useRef } from 'react'
import { Download, Link } from 'phosphor-react'
import { saveAs } from 'file-saver'
import './Card.css'

const Card = ({ waifu, loading }) => {
  const waifuImageRef = useRef(null)

  const handleImageLoad = () => {
    if (waifuImageRef.current) {
      waifuImageRef.current.classList.add('loaded')
    }
  }

  const handleImageDownload = () => {
    if (waifu) {
      const url = new URL(waifu)
      const pathname = url.pathname
      const filename = pathname.substring(pathname.lastIndexOf('/') + 1)
      const proxiedUrl = `/waifu-pics${pathname}`;
      saveAs(proxiedUrl, filename);
    }
  }

  return (
    <div className='card'>
      {loading && <p className='loading'>Loading...</p>}
      {
        waifu && (
          <img
            src={waifu}
            alt="Waifu"
            className='waifu-image'
            ref={waifuImageRef}
            onLoad={handleImageLoad}
          />
        )
      }
      <div className='card-button-container'>
        <button
          className='download-button'
          onClick={handleImageDownload}
        >
          <Download size={20} />
        </button>
        <a
          href={waifu}
          className='link-button'
          target='_blank'
          rel='noreferrer noopener'
        >
          <Link size={20} />
        </a>
      </div>
    </div>
  )
}

export default Card
