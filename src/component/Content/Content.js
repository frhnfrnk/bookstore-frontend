import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

// routes config
import routes from '../../routes'

const AppContent = () => {
  return (
    <Container>
      <div>
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                {routes.map((route, idx) => {
                  return (
                    route.element && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.element />}
                      />
                    )
                  )
                })}
              </Routes>
            </Suspense>
      </div>
    </Container>
  )
}

export default AppContent

const Container = styled.div`

width: 100%;
`