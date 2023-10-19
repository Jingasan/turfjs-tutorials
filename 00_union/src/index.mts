import * as fs from "fs";
import * as turf from "@turf/turf";

main();
function main() {
  // 指定ディレクトリからGeoJSONファイルの一覧を取得
  const polygonD = JSON.parse(fs.readFileSync("./polygonD.json", "utf8"));
  const polygonG = JSON.parse(fs.readFileSync("./polygonG.json", "utf8"));
  const DorG = turf.union(polygonD, polygonG);
  console.log(DorG);
  fs.writeFileSync("./union.json", JSON.stringify(DorG, null, "  "), "utf-8");
}
