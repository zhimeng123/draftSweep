import { FC, HTMLAttributes, CSSProperties, useMemo } from "react"
import styles from './styles.module.scss'


// 设置可选参数
interface Props extends HTMLAttributes<HTMLDivElement> {
  lightBg?: string;  // 扫光背景
  lightDegree?: string;  // 扫过倾角
  lightWidth?: CSSProperties['width']; // 扫光高度
}


const Sweep: FC<Props> = (props: Props) => {
  // 给默认值
  const {
    children,
    lightBg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .24) 50.04%, rgba(255, 255, 255, 0) 99.37%)',
    lightWidth = 80,
    lightDegree = '22.5deg'
  } = props

  const sweepLightStyle = useMemo<CSSProperties>(() => {
    return {
      width: lightWidth,
      background: lightBg,
      transform: `rotate(${lightDegree}) scaleY(2)`
    }
  }, [lightWidth, lightDegree, lightBg])

  return (
    <div className={styles.container}>
      {children}

      <div className={styles.mask}>
        <div className={styles.sweepLight} style={sweepLightStyle} />
      </div>
    </div>
  )
}


export default Sweep