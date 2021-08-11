"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetParkingLot = void 0;
class GetParkingLot {
    constructor(parkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    execute(code) {
        return this.parkingLotRepository.getParkingLot(code);
    }
}
exports.GetParkingLot = GetParkingLot;
