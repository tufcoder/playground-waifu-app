import PropTypes from 'prop-types'
import { Download, Link } from 'phosphor-react'
import axios from 'axios'
import FileSaver from 'file-saver'

import styles from './Card.module.css'

const proxy = import.meta.env.VITE_PROXY

export function Card({ file }) {
  async function handleClickDownload(e) {
    const fileUrl = e.currentTarget.value;
    if (fileUrl) {
      try {
        const proxyUrl = `${proxy}${encodeURIComponent(fileUrl)}`
        const filename = fileUrl.substring(fileUrl.lastIndexOf("/") + 1)
        const response = await axios.get(proxyUrl, { responseType: "blob" })
        FileSaver.saveAs(response.data, filename)
      } catch (error) {
        console.error('Error downloading the file', error)
      }
    }
  }

  return (
    <div className={styles.cardContainer}>
      <img src={file} />
      <div className={styles.cardButtonContainer}>
        <button
          className={`${styles.cardButtonBase} ${styles.cardDownloadButton}`}
          value={file}
          onClick={handleClickDownload}
          aria-label='download file'
          title='Download'
        >
          <Download size={20} />
        </button>
        <a
          href={file}
          className={`${styles.cardButtonBase} ${styles.cardLinkButton}`}
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Open in new tab'
          title='Open in new tab'
        >
          <Link size={20} />
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  file: PropTypes.string.isRequired,
}
