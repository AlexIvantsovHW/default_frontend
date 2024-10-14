type Props = { label: string }
export const HeaderTableEl = (props: Props) => {
  const { label } = props
  return (
    <div className="w-[150px] min-w-[150px] h-[50px] border border-gray bg-blue-500 flex items-center justify-center text-white text-[22px]">
      {label}
    </div>
  )
}
