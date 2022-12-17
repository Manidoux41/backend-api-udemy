import RoomModel from '../models/roomModels.js'


export const getTest = (_, res) => {
    res.send({
        message: "Hello les Hardcoders !"
    })
}

export const postTest = (req, res) => {
    res.send(req.body)
}

export const addRoom = async (req,res) => {
    const room = new RoomModel(req.body)
    try {
        await room.save();
        res.send(room)
    } catch (error) {
        res.status(500).send(error)
    }
}