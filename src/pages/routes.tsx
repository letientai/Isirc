import { Outlet, useLocation, useRoutes } from 'react-router-dom'
import nprogress from 'nprogress'
import { memo, useEffect, useMemo } from 'react'
import IsircConference from './IsircConference'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import CallForPapers from './CallForPapers'

const PublicRouteComponent = memo(() => (
  <DefaultLayout>
    <Outlet />
  </DefaultLayout>
))

const UseRouteElements = () => {
  const location = useLocation()

  useEffect(() => {
    nprogress.start()
    nprogress.done()
  }, [location.pathname])

  const routes = useMemo(
    () => [
      {
        path: '/',
        element: <PublicRouteComponent />,
        children: [
          { index: true, element: <IsircConference /> },
          {
            path: '/call-for-papers',
            element: <CallForPapers />,
          },
        ],
      },
    ],
    []
  )
  return useRoutes(routes)
}

export default UseRouteElements
