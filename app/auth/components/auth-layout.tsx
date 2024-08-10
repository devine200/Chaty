import React from 'react'
import styles from '../styles/auth-layout.module.css'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  const classNameTemplate = `flex justify-center items-center w-screen h-screen ${styles.layout}`
  alert(classNameTemplate)
  return (
    <div className={classNameTemplate}>{children}</div>
  )
}

export default AuthLayout