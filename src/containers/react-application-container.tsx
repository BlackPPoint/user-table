import React, { useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import ru from 'antd/lib/locale/ru_RU'

import { ContentLoader } from '../components/content-loader'
import { AppLayoutContainer } from './app-layout-container'

import { store, useAppDispatch, useAppSelector } from '../store'
import { initApplication } from '../store/thunks'

const ApplicationContainer = () => {
  const dispatch = useAppDispatch()
  const ready = useAppSelector(s => s.application.ready)

  // эффект размещения и удаления компонента в DOM
  useLayoutEffect(() => {
    console.log('Application MOUNTED')
    dispatch(initApplication())

    return () => console.log('Application UNMOUNTED')
  }, [ dispatch ])

  return (
    <ContentLoader className="application-content" tip="Приложение запускается" ready={ready}>
      <ConfigProvider locale={ru}>
        <AppLayoutContainer />
      </ConfigProvider>
    </ContentLoader>
  )
}

export const ReactApplicationContainer = () => {
  return <Provider store={store}>
    <ApplicationContainer />
  </Provider>
}
