import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x13307100ba931E97bA048a2EfF92F79fB9D35c19",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Geralt of Rivia - Sword in hand",
        description: "This NFT will give you access to WitcherDAO!",
        image: readFileSync("scripts/assets/Geralt_of_Rivia_Witcher.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()