import React from 'react'

interface AuthHeaderProps {
    children: React.ReactNode
}
const AuthHeader = ({children}:AuthHeaderProps) => {
  return (
    <div className="flex flex-col justify-between items-center auth-header">{children}</div>
  )
}

export default AuthHeader