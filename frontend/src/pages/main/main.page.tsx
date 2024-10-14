import * as i from './imports'

const MainPage = () => {
  const { data } = i.useGetAllProjectsQuery({})

  const headerData = ['CASINO', 'FEATURES', 'BONUS', 'RATE', 'PAYMENT']
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[75%] h-fit border border-gray-500">
        <div className="w-full flex gap-[10px]">
          {headerData.map((e, idx) => {
            return <i.HeaderTableEl label={e} key={idx} />
          })}
        </div>
        <div className="w-full flex gap-[10px]">
          <i.TableWidget />
        </div>
      </div>
    </div>
  )
}
export default MainPage
