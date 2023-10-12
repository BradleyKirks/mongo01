import { db } from "./connectDB.js"



const theFish =
{
    species: 'tetra',
    origin: 'Amazon',
    color: 'silver',
    size: '1',
    family: {
        dad: '🐟',
        sister: { cool: true, special: undefined },
        mom: { cool: true, special: undefined }
    }
}
export async function deleteAFish() {
    // find the fish we want to delete ??
    // delete it
    const fishDeleted = await db.collection('fish').findOneAndDelete({ species: "tetro" })
    console.log(fishDeleted)
}
export async function addAFish( { 
    const fishlist
})

export async function addAFish() {
    await db.collection('fish').insertOne(theFish)
}

export async function findOneAndDelete() {
    await db.collection('fish').find({}).toArray();
    const fishlist = await db.collection('fish').find({}).toArray();



db.collection.apply('fish').findOneAndDelete 

}