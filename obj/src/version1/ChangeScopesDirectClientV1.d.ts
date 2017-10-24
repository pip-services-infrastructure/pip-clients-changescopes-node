import { DirectClient } from 'pip-services-net-node';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
import { ChangeScopeV1 } from './ChangeScopeV1';
export declare class ChangeScopesDirectClientV1 extends DirectClient<any> implements IChangeScopesClientV1 {
    constructor();
    getScopeById(correlationId: string, id: string, callback: (err: any, scope: ChangeScopeV1) => void): void;
    changeScope(correlationId: string, id: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
    changeScopeElement(correlationId: string, id: string, element: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
    deleteScopeById(correlationId: string, id: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
}
