import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
export declare class ChangeScopesNullClientV1 implements IChangeScopesClientV1 {
    constructor(config?: any);
    getScopeById(correlationId: string, id: string, callback: (err: any, scope: ChangeScopeV1) => void): void;
    changeScope(correlationId: string, id: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
    changeScopeElement(correlationId: string, id: string, element: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
    deleteScopeById(correlationId: string, id: string, callback?: (err: any, scope: ChangeScopeV1) => void): void;
}
