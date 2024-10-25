import React from 'react'

type Item = {
  title: string
  content: string
  role: string
  circa: string
  tech: string
  logo: string
  image: string
}

type Props = {
  items: Item[]
}

const SideAccordion = (props: Props) => {
  const { items } = props

  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-16'>
      <div>
        {
          items.map((item, index) => (
            <div
              key={index}
              className='flex justify-between cursor-pointer border-b border-gray-300'
              onClick={() => setActiveIndex(index)}>
                <div className='flex gap-4 justify-between items-center p-4'>
                    <img src={item.logo} alt={item.title} className='w-8 h-8' />
                    <div className='flex flex-col'>
                      <strong className='m-0'>{item.title}</strong>
                      <span className='text-gray-500'>{item.role}</span>
                    </div>
                  </div>
            </div>
          ))
        }
      </div>
      <div>
        {
          activeIndex != null && (
            <div className='p-4'>
              <p className='text-gray-500 m-0'>{items[activeIndex].circa}</p>
              <p className='text-gray-500 m-0'>{items[activeIndex].tech}</p>
              <img src={items[activeIndex].image} alt={items[activeIndex].title} className='w-full h-auto mt-4' />
              <p className='mt-4'>{items[activeIndex].content}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SideAccordion