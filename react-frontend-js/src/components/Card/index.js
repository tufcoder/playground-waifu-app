import { useState } from 'react'
import { Download, Link } from 'phosphor-react'
import { saveAs } from 'file-saver'

import {
  CardContainer,
  CardButtonContainer,
  Loading,
  WaifuImage,
  CardDownloadButton,
  CardLinkButton,
} from './styles'

export function Card({ waifu, loading }) {
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [isWaifuImageLoaded, setIsWaifuImageLoaded] = useState(false)

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
    <CardContainer
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {loading && <Loading>Loading...</Loading>}
      {
        waifu && (
          <WaifuImage
            src={waifu}
            alt="Waifu"
            onLoad={() => setIsWaifuImageLoaded(true)}
            isCardHovered={isCardHovered}
            isWaifuImageLoaded={isWaifuImageLoaded}
          />
        )
      }
      <CardButtonContainer isCardHovered={isCardHovered}>
        <CardDownloadButton
          onClick={handleImageDownload}
        >
          <Download size={20} />
        </CardDownloadButton>
        <CardLinkButton
          href={waifu}
          target='_blank'
          rel='noreferrer noopener'
        >
          <Link size={20} />
        </CardLinkButton>
      </CardButtonContainer>
    </CardContainer>
  )
}
