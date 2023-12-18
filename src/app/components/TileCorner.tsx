import IconStart from "../icons/IconStart";
import IconStartText from "../icons/IconStartText";

function TileCorner({ className }:any) {
  return (
    <div className={`flex items-center justify-center flex-col rounded-lg bg-[#232747] ${className}`} style={{ inlineSize: "6.5rem", blockSize: "6.5rem"}}>
      <div className="w-9/12">
        <IconStartText />
      </div>
      <div className="flex translate-x-1 w-1/3">
        <IconStart />
      </div>
    </div>
  )
}

export default TileCorner;
