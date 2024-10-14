import * as i from './imports'
const LoginPage = () => {
  const { data } = i.useGetAllProjectsQuery({})
  console.log(data)
  return <div>login</div>
}
export default LoginPage
