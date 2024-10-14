import { CasinoType } from './imports'

export * as i from './imports'
export const TableWidget = () => {
  const style =
    'w-[150px] min-w-[150px] h-[100px] border border-gray bg-blue-500 flex items-center justify-center text-white text-[22px]'
  const data: CasinoType[] = [
    {
      id: 17,
      casino_rate: 4,
      country_id: 2,
      casino_name: 'The Great Casino',
      casino_features: 'Slots, Table Games',
      casino_bonus: '10% Cashback',
      link: "'asdasd'",
      logoimg: "'sadads'",
      payment_id: 1,
    },
    {
      id: 30,
      casino_rate: 5,
      country_id: 2,
      casino_name: 'TestingBet',
      casino_features: 'no features,only fun',
      casino_bonus: '1000 FS',
      link: 'testingBet.com',
      logoimg: 'asd',
      payment_id: 3,
    },
    {
      id: 31,
      casino_rate: 5,
      country_id: 2,
      casino_name: 'TestingBet',
      casino_features: 'no features,only fun',
      casino_bonus: '1000 FS',
      link: 'testingBet.com',
      logoimg: 'asd.com',
      payment_id: 3,
    },
  ]
  return (
    <div className="w-[100%] h-fit flex flex-col">
      {data.map((e, idx) => {
        return (
          <div key={idx} className="w-[100%] flex flex-row">
            {' '}
            <div className={style}>
              <img
                className="w-full h-full "
                style={{ objectFit: 'cover' }}
                src={e.logoimg}
              />
            </div>
            <div className={style}>{e.casino_features}</div>
            <div className={style}>{e.casino_bonus}</div>
            <div className={style}>{e.casino_rate}</div>
            <div className={style}>
              <img
                className="w-full h-full  "
                style={{ objectFit: 'contain' }}
                /*  src={e.payment_id} */
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
