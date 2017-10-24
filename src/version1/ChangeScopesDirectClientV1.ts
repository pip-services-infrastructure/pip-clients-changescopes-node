import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IChangeScopesClientV1 } from './IChangeScopesClientV1';
//import { IChangeScopesController } from 'pip-services-changescopes-node';
import { ChangeScopeV1 } from './ChangeScopeV1';

export class ChangeScopesDirectClientV1 extends DirectClient<any> implements IChangeScopesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-changescopes", "controller", "*", "*", "*"))
    }

    public getScopeById(correlationId: string, id: string, 
        callback: (err: any, scope: ChangeScopeV1) => void): void {
        let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
        this._controller.getScopeById(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }

    public changeScope(correlationId: string, id: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope');
        this._controller.changeScope(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }

    public changeScopeElement(correlationId: string, id: string, element: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope_element');
        this._controller.changeScopeElement(correlationId, id, element, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }

    public deleteScopeById(correlationId: string, id: string, 
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        let timing = this.instrument(correlationId, 'change_scopes.delete_scope_by_id');
        this._controller.deleteScopeById(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }
    
}