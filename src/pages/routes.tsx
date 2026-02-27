import { Outlet, useLocation, useRoutes } from 'react-router-dom'
import nprogress from 'nprogress'
import { memo, useEffect, useMemo } from 'react'
import IsircConference from './IsircConference'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import CallForPapers from './CallForPapers'
import { Page_404 } from './NotFound'
import Hotels from './Hotels'

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
          {
            path: '/hotels',
            element: <Hotels />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <DefaultLayout>
            <Page_404 />
          </DefaultLayout>
        ),
      },
    ],
    []
  )
  return useRoutes(routes)
}

export default UseRouteElements
