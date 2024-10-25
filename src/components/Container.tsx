import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = (props: Props) => {

  const { children, className } = props

  return (
    <div className={['mx-auto w-full xl:max-w-[1200px] 2xl:max-w-[1400px]', className].join(' ')}>
      {children}
    </div>
  )
}

export default Container