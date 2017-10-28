declare module 'redux-observable' {
  declare export function combineEpics(...args: any[]): Object;
  declare export function createEpicMiddleware(rootEpicFunc: any): Object;
}
