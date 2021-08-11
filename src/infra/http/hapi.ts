import Hapi from "@hapi/hapi";
import { HapiAdapter } from "../../adapter/HapiAdapter";
import { ParkingLotController } from "../../adapter/ParkingLotController";

const server = Hapi.server({
  port: 2000,
  host: "localhost",
});

server.route({
  method: "GET",
  path: "/parkingLots/{code}",
  handler: HapiAdapter.create(ParkingLotController.getParkingLots),
});

server.start().then(() => {
  console.log("Server running on %s", server.info.uri);
});
