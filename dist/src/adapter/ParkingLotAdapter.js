"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotAdapter = void 0;
const ParkingLot_1 = require("../core/entity/ParkingLot");
class ParkingLotAdapter {
    static create(code, capacity, openHour, closeHour, occupiedSpaces) {
        return new ParkingLot_1.ParkingLot(code, capacity, openHour, closeHour, occupiedSpaces);
    }
}
exports.ParkingLotAdapter = ParkingLotAdapter;
