import express from 'express';
import httpStatus from 'http-status';
import { user as UserEntity } from '../../models/index';

const routes = express.Router();

routes.get('/',
    async (req, res) => {
        let response = null;
        try {
            // logics
            console.log('entrei get user');

        } catch (err) {
            //handle error
        }
        return res.status(httpStatus.OK).json(response);
    });

routes.post('/',
    async (req, res) => {
        let response = null;
        try {
            // logics
            console.log('entrei post user');
            console.log(req.body);

            const check = await UserEntity.findOne({ where: { email: req.body.email } })
            if (!check) {
                response = await UserEntity.create(req.body);
            } else {
                return res.status(401).json({ mensage: 'Email ja cadastrado.' });
            }

            // response = await UserEntity.create(req.body);

        } catch (err) {
            // handle error
            console.log(err)

        }
        return res.status(httpStatus.OK).json(response);
    });



export default routes;


