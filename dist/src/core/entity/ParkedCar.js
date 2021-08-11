"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkedCar = void 0;
class ParkedCar {
    constructor(code, plate, date) {
        if (!/[A-Z]{3}-[0-9]{4}/.test(plate))
            throw new Error("Invalid plate");
        this.code = code;
        this.plate = plate;
        this.date = date;
    }
}
exports.ParkedCar = ParkedCar;
