let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { ChangeScopesMemoryPersistence } from 'pip-services-changescopes-node';
import { ChangeScopesController } from 'pip-services-changescopes-node';
import { ChangeScopesHttpServiceV1 } from 'pip-services-changescopes-node';
import { IChangeScopesClientV1 } from '../../src/version1/IChangeScopesClientV1';
import { ChangeScopesHttpClientV1 } from '../../src/version1/ChangeScopesHttpClientV1';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ChangeScopesHttpClientV1', ()=> {
    let service: ChangeScopesHttpServiceV1;
    let client: ChangeScopesHttpClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        service = new ChangeScopesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-changescopes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-changescopes', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ChangeScopesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ChangeScopesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Get and Change', (done) => {
        fixture.testGetAndChange(done);
    });

});
