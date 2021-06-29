export interface IAppState{
  auth : any
}

export const appInitialState: IAppState = {
  auth:{ "currency" : "GBP", "exchange": 1, "basket" : [] }
}