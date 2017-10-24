let _ = require('lodash');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';

import { ChangeScopeV1 } from './ChangeScopeV1';
import { IChangeScopesClientV1 } from './IChangeScopesClientV1';

export class ChangeScopesSenecaClientV1 extends CommandableSenecaClient implements IChangeScopesClientV1 {

    constructor(config?: any) {
        super('change_scopes');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getScopeById(correlationId: string, id: string, 
        callback: (err: any, scope: ChangeScopeV1) => void): void {
        this.callCommand(
            'get_scope_by_id',
            correlationId,
            {
                id: id
            }, 
            callback
        );
    }

    public changeScope(correlationId: string, id: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        this.callCommand(
            'change_scope',
            correlationId,
            {
                id: id
            }, 
            callback
        );
    }

    public changeScopeElement(correlationId: string, id: string, element: string,
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        this.callCommand(
            'change_scope_element',
            correlationId,
            {
                id: id,
                element: element
            }, 
            callback
        );
    }

    public deleteScopeById(correlationId: string, id: string, 
        callback?: (err: any, scope: ChangeScopeV1) => void): void {
        this.callCommand(
            'delete_scope_by_id',
            correlationId,
            {
                id: id
            }, 
            callback
        );
    }
    
}
