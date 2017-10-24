"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ChangeScopesNullClientV1_1 = require("../version1/ChangeScopesNullClientV1");
const ChangeScopesDirectClientV1_1 = require("../version1/ChangeScopesDirectClientV1");
const ChangeScopesHttpClientV1_1 = require("../version1/ChangeScopesHttpClientV1");
const ChangeScopesLambdaClientV1_1 = require("../version1/ChangeScopesLambdaClientV1");
const ChangeScopesSenecaClientV1_1 = require("../version1/ChangeScopesSenecaClientV1");
class ChangeScopesClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1_1.ChangeScopesNullClientV1);
        this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1_1.ChangeScopesDirectClientV1);
        this.registerAsType(ChangeScopesClientFactory.HttpClientV1Descriptor, ChangeScopesHttpClientV1_1.ChangeScopesHttpClientV1);
        this.registerAsType(ChangeScopesClientFactory.LambdaClientV1Descriptor, ChangeScopesLambdaClientV1_1.ChangeScopesLambdaClientV1);
        this.registerAsType(ChangeScopesClientFactory.SenecaClientV1Descriptor, ChangeScopesSenecaClientV1_1.ChangeScopesSenecaClientV1);
    }
}
ChangeScopesClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'factory', 'default', 'default', '1.0');
ChangeScopesClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'client', 'null', 'default', '1.0');
ChangeScopesClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'client', 'direct', 'default', '1.0');
ChangeScopesClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'client', 'http', 'default', '1.0');
ChangeScopesClientFactory.LambdaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'client', 'lambda', 'default', '1.0');
ChangeScopesClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-changescopes', 'client', 'seneca', 'default', '1.0');
exports.ChangeScopesClientFactory = ChangeScopesClientFactory;
//# sourceMappingURL=ChangeScopesClientFactory.js.map