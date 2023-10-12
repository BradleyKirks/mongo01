import { db } from "./connectDB.js"



const theFish = 
{species: 'tetra',
origin: 'Amazon',
color: 'silver',
size: '1', 
}

// add a fish 
export async function addAFish(){
    await db.collection('fish').insertOne(theFish)
}

export async function getAllFish() {
    await db.collection('fish'). find ({}).toArray();
    const fishlist = await db.collection('fish').find({}).toArray();
}