import { addAFish, getAllFish, deleteAFish } from "./src/fish.js"
import { closeclient } from "./src/connectDB.js";

await addAFish();
await getAllFish();
await deleteAFish();