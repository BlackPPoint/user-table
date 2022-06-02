import React from 'react'

export interface IContentLoaderProps {
  className?: string
  
  tip?: string
  ready?: boolean
  children: React.ReactNode
}
