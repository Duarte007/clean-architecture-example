"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
class ParkingLot {
    constructor(code, capacity, openHour, closeHour, occupiedSpaces) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedSpaces = occupiedSpaces;
    }
    isOpen(date) {
        const hour = date.getHours();
        return hour >= this.openHour && hour <= this.closeHour;
    }
    isFull() {
        return this.capacity === this.occupiedSpaces;
    }
}
exports.ParkingLot = ParkingLot;
