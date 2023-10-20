import * as turf from "@turf/turf";
import * as fs from "fs";

main();
function main() {
  const points = JSON.parse(fs.readFileSync("./source.json", "utf8"));
  const geojson = turf.polygon([points]);
  const options = { tolerance: 0.2, highQuality: true, mutate: true };
  var simplified = turf.simplify(geojson, options);
  fs.writeFileSync("simplified.geojson", JSON.stringify(simplified));
}
