"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExpressAdapter_1 = require("../../adapter/ExpressAdapter");
const ParkingLotController_1 = require("../../adapter/ParkingLotController");
const app = express_1.default();
app.get("/parkingLots/:code", ExpressAdapter_1.ExpressAdapter.create(ParkingLotController_1.ParkingLotController.getParkingLots));
app.listen(2000, () => {
    console.log(`listening port: ${2000}`);
});
