import { useGetAllProjectsQuery } from '../../shared/reducers/user/user.api'

const MainPage = () => {
  const { data } = useGetAllProjectsQuery({})
  console.log(data)
  return <div>Main page</div>
}
export default MainPage
