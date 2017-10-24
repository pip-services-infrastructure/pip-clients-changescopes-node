import { YamlConfigReader } from 'pip-services-commons-node';
import { ChangeScopesClientFixtureV1 } from './ChangeScopesClientFixtureV1';
import { ChangeScopesLambdaClientV1 } from '../../src/version1/ChangeScopesLambdaClientV1';

suite('ChangeScopesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: ChangeScopesLambdaClientV1;
    let fixture: ChangeScopesClientFixtureV1;

    setup((done) => {
        client = new ChangeScopesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new ChangeScopesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Get and Change', (done) => {
        fixture.testGetAndChange(done);
    });

});