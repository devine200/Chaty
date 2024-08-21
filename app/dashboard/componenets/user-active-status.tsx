import React from 'react';
import styles from '../../styles/dashboard.module.css';

interface UserActiveStatusProps {
    isActive: boolean
}
const UserActiveStatus = ({isActive}:UserActiveStatusProps) => {
    const userActiveStatusClassName = `block rounded-full ${isActive ? "bg-green-500" : "bg-yellow-500"} ${styles.userStatus}`
  return (
    <span className={userActiveStatusClassName}></span>
  )
}

export default UserActiveStatus