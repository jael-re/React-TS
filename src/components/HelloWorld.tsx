import React from 'react'

interface HelloProp {
  message?: string
}

const HelloWorld: React.FC<HelloProp> = (props) => {
  return <h2>{props.message}</h2>
}

// 默认的props
HelloWorld.defaultProps = {
  message: 'welcome'
}
export default HelloWorld