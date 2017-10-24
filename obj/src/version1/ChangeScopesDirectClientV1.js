"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class ChangeScopesDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-changescopes", "controller", "*", "*", "*"));
    }
    getScopeById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'change_scopes.get_scope_by_id');
        this._controller.getScopeById(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }
    changeScope(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope');
        this._controller.changeScope(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }
    changeScopeElement(correlationId, id, element, callback) {
        let timing = this.instrument(correlationId, 'change_scopes.change_scope_element');
        this._controller.changeScopeElement(correlationId, id, element, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }
    deleteScopeById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'change_scopes.delete_scope_by_id');
        this._controller.deleteScopeById(correlationId, id, (err, scope) => {
            timing.endTiming();
            callback(err, scope);
        });
    }
}
exports.ChangeScopesDirectClientV1 = ChangeScopesDirectClientV1;
//# sourceMappingURL=ChangeScopesDirectClientV1.js.map