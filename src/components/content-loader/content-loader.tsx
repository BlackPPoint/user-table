import React from 'react'
import { Spin } from 'antd'
import classnames from 'classnames'

import { IContentLoaderProps } from './types'

import './content-loader.less'

export const ContentLoader = ({ className: extraClassName, tip, ready = false, children }: IContentLoaderProps) => 
  <Spin wrapperClassName={classnames('content-loader', extraClassName)} tip={tip} spinning={!ready}>
    {ready && children}
  </Spin>
