import React from 'react';
import styles from "../../styles/auth-layout.module.css"

interface CheckBoxProps {
    checked?: boolean | false;
}

const AuthCheckBox = ({checked}:CheckBoxProps) => {
  return (
    <div className="mb-8">
        <input type="checkbox" checked={checked} className={styles.authCheckBox} /> <span className="capitalize font-medium mb-4">Remember me</span>
    </div>
  )
}

export default AuthCheckBox