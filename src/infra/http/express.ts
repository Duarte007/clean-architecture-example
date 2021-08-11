import Express from "express";
import { ExpressAdapter } from "../../adapter/ExpressAdapter";
import { ParkingLotController } from "../../adapter/ParkingLotController";

const app = Express();

app.get("/parkingLots/:code", ExpressAdapter.create(ParkingLotController.getParkingLots));

app.listen(2000, () => {
  console.log(`listening port: ${2000}`);
});
