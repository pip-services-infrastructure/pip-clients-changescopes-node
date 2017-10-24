import { ConfigParams } from 'pip-services-commons-node';

import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';

export class ChangeScopesNullClientV1 implements IChangeScopesClientV1 {
    constructor(config?: any) {}
        

    public getScopeById(correlationId: string, id: string, 
        callback: (err: any, scope: ChangeScopeV1) => void): void {
        callback(null, <ChangeScopeV1>{ id: id, change_time: new Date(0), elements: {} });
    }

    public changeScope(correlationId: string, id: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        if (callback) callback(null, <ChangeScopeV1>{ id: id, change_time: new Date(), elements: {} });
    }

    public changeScopeElement(correlationId: string, id: string, element: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        if (callback) callback(null, <ChangeScopeV1>{ id: id, change_time: new Date(), elements: {} });
    }

    public deleteScopeById(correlationId: string, id: string, 
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        if (callback) callback(null, null);
    }
}
