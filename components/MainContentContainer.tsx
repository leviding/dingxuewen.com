import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  background?: boolean
}

const MainContentContainer = ({ children, background = true }: Props) => {
  return (
    <main
      className={`${
        background ? 'bg-white dark:bg-neutral-900 rounded' : 'lg:max-w-[820px]'
      } flex-auto`}
    >
      {children}
    </main>
  )
}

export default MainContentContainer
