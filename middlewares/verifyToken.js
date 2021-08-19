const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({ message: 'No token provided' })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findOne({
            where: {
                id: decoded.user.id
            }
        })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports = verifyToken;