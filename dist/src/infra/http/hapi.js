"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const HapiAdapter_1 = require("../../adapter/HapiAdapter");
const ParkingLotController_1 = require("../../adapter/ParkingLotController");
const server = hapi_1.default.server({
    port: 2000,
    host: "localhost",
});
server.route({
    method: "GET",
    path: "/parkingLots/{code}",
    handler: HapiAdapter_1.HapiAdapter.create(ParkingLotController_1.ParkingLotController.getParkingLots),
});
server.start().then(() => {
    console.log("Server running on %s", server.info.uri);
});
