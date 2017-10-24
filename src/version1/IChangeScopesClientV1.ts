import { ConfigParams } from 'pip-services-commons-node';

import { ChangeScopeV1 } from './ChangeScopeV1';

export interface IChangeScopesClientV1 {
    getScopeById(correlationId: string, id: string, 
        callback: (err: any, scope: ChangeScopeV1) => void): void;

    changeScope(correlationId: string, id: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void;

    changeScopeElement(correlationId: string, id: string, element: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void;

    deleteScopeById(correlationId: string, id: string, 
        callback?: (err: any, scope: ChangeScopeV1) => void): void;
}
