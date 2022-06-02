import React from 'react'

export interface IAppLayoutProps {
  actions?: IAppAction[]
  children: React.ReactNode
}

export interface IAppAction {
  key?: string
  title: string
  action: () => void
}
