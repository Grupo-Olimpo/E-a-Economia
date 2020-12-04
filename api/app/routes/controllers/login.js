import express from 'express';
import httpStatus from 'http-status';
import { user as UserEntity } from '../../models/index';

const routes = express.Router();

routes.post('/',
    async (req, res) => {
        let response = null;
        try {
            // logics
            console.log('entrei login');
            console.log(req.body);

            const { email, password } = req.body;
            console.log('email', email);
            console.log('senha', password);


            const response = await UserEntity.findOne({ where: { email: email, password: password } });

            if (response) {
                return res.status(200).json({
                    "userId": response.id,
                    "name": response.name
                })
            } else {
                return res.status(401).json({ mensage: 'Não autorizado!' })
            }

        } catch (err) {
            // handle error
            console.log(err)
            console.log(AAAAAAA)
        }
        return res.status(httpStatus.OK).json(response);
    });



export default routes;