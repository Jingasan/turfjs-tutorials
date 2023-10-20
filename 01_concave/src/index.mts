import * as turf from "@turf/turf";
import * as fs from "fs";

main();
function main() {
  // 指定ディレクトリからGeoJSONファイルの一覧を取得
  const points = JSON.parse(fs.readFileSync("./source.json", "utf8"));
  const feature: turf.helpers.Feature<
    turf.helpers.Point,
    {
      [name: string]: any;
    }
  >[] = [];
  for (const point of points) {
    console.log(point);
    feature.push(turf.point(point));
  }
  const collection = turf.featureCollection(feature);
  if (collection.features.length > 0)
    var concaveHull = turf.concave(collection, {
      units: "miles",
      maxEdge: 100,
    });
  fs.writeFileSync("concave_hull.geojson", JSON.stringify(concaveHull));
}
