let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { ChangeScopesMemoryPersistence } from 'pip-services-changescopes-node';
import { ChangeScopesController } from 'pip-services-changescopes-node';
import { IChangeScopesClientV1 } from '../../src/version1/IChangeScopesClientV1';
import { ChangeScopesDirectClientV1 } from '../../src/version1/ChangeScopesDirectClientV1';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';

suite('ChangeScopesDirectClientV1', ()=> {
    let client: ChangeScopesDirectClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ChangeScopesMemoryPersistence();
        let controller = new ChangeScopesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-changescopes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-changescopes', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ChangeScopesDirectClientV1();
        client.setReferences(references);

        fixture = new ChangeScopesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Get and Change', (done) => {
        fixture.testGetAndChange(done);
    });

});
