export type SigInRequest = {
  user: string
  password: string
}

export type SigIn = {
  token: string
  validated: boolean
}

export interface SigInResponse {
  data: SigIn
}
