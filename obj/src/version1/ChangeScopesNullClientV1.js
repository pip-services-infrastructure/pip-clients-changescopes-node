"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeScopesNullClientV1 {
    constructor(config) { }
    getScopeById(correlationId, id, callback) {
        callback(null, { id: id, change_time: new Date(0), elements: {} });
    }
    changeScope(correlationId, id, callback) {
        if (callback)
            callback(null, { id: id, change_time: new Date(), elements: {} });
    }
    changeScopeElement(correlationId, id, element, callback) {
        if (callback)
            callback(null, { id: id, change_time: new Date(), elements: {} });
    }
    deleteScopeById(correlationId, id, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.ChangeScopesNullClientV1 = ChangeScopesNullClientV1;
//# sourceMappingURL=ChangeScopesNullClientV1.js.map