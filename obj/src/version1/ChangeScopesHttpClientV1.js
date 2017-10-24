"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class ChangeScopesHttpClientV1 extends pip_services_net_node_1.CommandableHttpClient {
    constructor(config) {
        super('change_scopes');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getScopeById(correlationId, id, callback) {
        this.callCommand('get_scope_by_id', correlationId, {
            id: id
        }, callback);
    }
    changeScope(correlationId, id, callback) {
        this.callCommand('change_scope', correlationId, {
            id: id
        }, callback);
    }
    changeScopeElement(correlationId, id, element, callback) {
        this.callCommand('change_scope_element', correlationId, {
            id: id,
            element: element
        }, callback);
    }
    deleteScopeById(correlationId, id, callback) {
        this.callCommand('delete_scope_by_id', correlationId, {
            id: id
        }, callback);
    }
}
exports.ChangeScopesHttpClientV1 = ChangeScopesHttpClientV1;
//# sourceMappingURL=ChangeScopesHttpClientV1.js.map