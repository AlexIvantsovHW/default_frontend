import { Attributes } from './type'

export type CasinoType = Pick<
  Attributes,
  | 'id'
  | 'casino_bonus'
  | 'casino_features'
  | 'casino_name'
  | 'casino_rate'
  | 'country_id'
  | 'link'
  | 'logoimg'
  | 'payment_id'
>
