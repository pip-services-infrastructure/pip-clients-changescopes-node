let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { ChangeScopesMemoryPersistence } from 'pip-services-changescopes-node';
import { ChangeScopesController } from 'pip-services-changescopes-node';
import { ChangeScopesSenecaServiceV1 } from 'pip-services-changescopes-node';
import { IChangeScopesClientV1 } from '../../src/version1/IChangeScopesClientV1';
import { ChangeScopesSenecaClientV1 } from '../../src/version1/ChangeScopesSenecaClientV1';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('ChangeScopesSenecaClientV1', () => {
    let service: ChangeScopesSenecaServiceV1;
    let client: ChangeScopesSenecaClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        service = new ChangeScopesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-changescopes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-changescopes', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new ChangeScopesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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
