import { FC, JSX } from 'react'
import styles from './Input.module.scss'
import { InputProps } from './Input.props'

const Input: FC<InputProps> = ({
  name,
  label,
  value,
  children,
  ...props
}): JSX.Element => {
  return (
    <div className={styles.slider}>
      <input className={styles.input} id={name} value={value} {...props}>
        {children}
      </input>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default Input
