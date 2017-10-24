let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services-commons-node';
import { IChangeScopesClientV1 } from '../../src/version1/IChangeScopesClientV1';

export class ChangeScopesClientFixtureV1 {
    private _client: IChangeScopesClientV1;
    
    constructor(client: IChangeScopesClientV1) {
        this._client = client;
    }

    public testGetAndChange(done) {
        async.series([
            (callback) => {
                this._client.changeScope(
                    null,
                    '123',
                    (err, scope) => {
                        assert.isNull(err);
                        
                        assert.isObject(scope);
                        assert.equal('123', scope.id);
                        assert.isEmpty(scope.elements);

                        callback();
                    }
                );
            },
            (callback) => {
                this._client.changeScopeElement(
                    null,
                    '123', 'key1',
                    (err, scope) => {
                        assert.isNull(err);
                        
                        assert.isObject(scope);
                        assert.equal('123', scope.id);
                        assert.hasAllKeys(scope.elements, ['key1']);

                        callback();
                    }
                );
            },
            (callback) => {
                this._client.changeScopeElement(
                    null,
                    '123', 'key2',
                    (err, scope) => {
                        assert.isNull(err);
                        
                        assert.isObject(scope);
                        assert.equal('123', scope.id);
                        assert.hasAllKeys(scope.elements, ['key1', 'key2']);
                        
                        callback();
                    }
                );
            },
            (callback) => {
                this._client.deleteScopeById(
                    null,
                    '123',
                    (err, scope) => {
                        assert.isNull(err);
                        
                        assert.isObject(scope);
                        assert.equal('123', scope.id);

                        callback();
                    }
                );
            },
            (callback) => {
                this._client.getScopeById(
                    null,
                    '123',
                    (err, scope) => {
                        assert.isNull(err);
                        
                        assert.isObject(scope);
                        assert.equal('123', scope.id);

                        callback();
                    }
                );
            }
        ], done);
    }    
        
}
