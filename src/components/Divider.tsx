type Props = {
  className?: string
}

const Divider = (props: Props) => {
  const { className } = props
  return (
    <div className={['h-[1px] w-1/2 mx-auto bg-gray-300', className].join(' ')}></div>
  )
}

export default Divider