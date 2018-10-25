import * as redux from 'redux'

export interface IDatabase {
    name: string,
}

export interface IFhirResource {
    resourceType: string,
    owner: string,
    table: string,
    primaryKey: string,
    content: any,
}

export interface appState {
    currentFhirResource: IFhirResource,
    currentInputDatabase :IDatabase,
    dispatch?: redux.Dispatch<any>,
}

export interface action {
    type: string,
    promise?: (dispatch: any, getState: any) => any,
    value?: any,
}
