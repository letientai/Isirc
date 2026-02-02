import { memo } from 'react'
import { Navbar } from './components/Navbar'

interface Props {
  children?: React.ReactNode
}

function DefaultLayoutInner({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-white">
      <Navbar />
      {children}
    </div>
  )
}

const DefaultLayout = memo(DefaultLayoutInner, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children
})

export default DefaultLayout
