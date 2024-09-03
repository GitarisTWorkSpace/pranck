import styles from './page.module.css'

type Props = {}

const September = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>3 Сентября</h1>
        <video src={require('../video/MorZPPbIZV5zJcMBF0CYroSZJvVg7ed5.mp4')} className={styles.video} controls loop autoPlay muted></video>
      </div>
    </div>
  )
}

export default September;