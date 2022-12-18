import UserModel from '../models/userModels.js'

export const signUp = async (req, res) => {
    const { pseudo, email, password } = req.body

    try {
        const user = await UserModel.create({pseudo, email, password})
        res.status(201).json({ user: user._id })
    } catch (error) {
        res.status(200).send({ error })
    }
}