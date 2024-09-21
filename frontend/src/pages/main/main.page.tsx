import * as i from './imports'
const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})
  console.log(data)
  return <div>Main page</div>
}
export default MainPage

import React from 'react'
import { type } from './model'

export const name = (props: type) => {
  return <div></div>
}
