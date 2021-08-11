import { ParkingLotAdapter } from "../../adapter/ParkingLotAdapter";
import { ParkingLot } from "../../core/entity/ParkingLot";
import { ParkingLotRepository } from "../../core/repository/ParkingLotRepository";
import { mysqlDB as knexConnection } from "../database/database";

export class ParkingLotRepositoryMySQL implements ParkingLotRepository {
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = await knexConnection
      .raw(
        `select *, (select count(*) from parked_car where parked_car.code = parking_lot.code) as occupiedSpaces from parking_lot where code = "${code}"`
      )
      .then((result) => result?.[0]?.[0]);
    if (!parkingLotData) throw new Error("Parking lot not found");
    return ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      parkingLotData.occupiedSpaces
    );
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await knexConnection("parked_car").insert({ code, plate, date });
  }
}
