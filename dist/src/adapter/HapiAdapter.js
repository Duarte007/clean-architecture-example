"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HapiAdapter = void 0;
class HapiAdapter {
    static create(fn) {
        return async function (req) {
            const obj = await fn(req.params, req.payload);
            return obj;
        };
    }
}
exports.HapiAdapter = HapiAdapter;
