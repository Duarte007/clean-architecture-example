"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnterParkingLot_1 = require("../src/core/useCase/EnterParkingLot");
const GetParkingLot_1 = require("../src/core/useCase/GetParkingLot");
const ParkingLotRepositoryMemory_1 = require("../src/infra/repository/ParkingLotRepositoryMemory");
const ParkingLotRepositoryMySQL_1 = require("../src/infra/repository/ParkingLotRepositoryMySQL");
test("should get parking lot", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory_1.ParkingLotRepositoryMemory();
    const parkingLotRepositoryMySQL = new ParkingLotRepositoryMySQL_1.ParkingLotRepositoryMySQL();
    const getParkingLot = new GetParkingLot_1.GetParkingLot(parkingLotRepositoryMySQL);
    const parkingLot = await getParkingLot.execute("shopping");
    console.log(parkingLot);
    expect(parkingLot.code).toBe("shopping");
});
test("should enter parking lot", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory_1.ParkingLotRepositoryMemory();
    const parkingLotRepositoryMySQL = new ParkingLotRepositoryMySQL_1.ParkingLotRepositoryMySQL();
    const enterParkingLot = new EnterParkingLot_1.EnterParkingLot(parkingLotRepositoryMySQL);
    const getParkingLot = new GetParkingLot_1.GetParkingLot(parkingLotRepositoryMySQL);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-08-06T10:00:00"));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
    expect(parkingLot.code).toBe("shopping");
});
test.skip("should be closed", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory_1.ParkingLotRepositoryMemory();
    const parkingLotRepositoryMySQL = new ParkingLotRepositoryMySQL_1.ParkingLotRepositoryMySQL();
    const enterParkingLot = new EnterParkingLot_1.EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot_1.GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-08-06T23:00:00"));
});
test.skip("should be full", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory_1.ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot_1.EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot_1.GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-08-06T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0002", new Date("2021-08-06T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0003", new Date("2021-08-06T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0004", new Date("2021-08-06T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0005", new Date("2021-08-06T10:00:00"));
    await enterParkingLot.execute("shopping", "MMM-0006", new Date("2021-08-06T10:00:00"));
});
