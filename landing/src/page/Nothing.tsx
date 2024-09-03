import styles from './page.module.css'

type Props = {}

const Nothing = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ты думал тут что-то будет?</h1>
        <video src={require('../video/1681476894_looped_1681476894.mp4')} className={styles.video} controls loop autoPlay muted></video>
      </div>
    </div>
  )
}

export default Nothing;