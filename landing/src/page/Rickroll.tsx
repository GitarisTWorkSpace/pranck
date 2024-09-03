import styles from './page.module.css'

type Props = {}

const Rickroll = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Вас зарикролили</h1>
        <video src={require('../video/8KWrKyiDV9G8ky1Jl17dDU70pMRTvHmc.mp4')} className={styles.video} controls loop autoPlay muted></video>
      </div>
    </div>
  )
}

export default Rickroll;