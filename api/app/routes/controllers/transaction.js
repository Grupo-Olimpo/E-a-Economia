import express from 'express';
import httpStatus from 'http-status';
import { user as UserEntity } from '../../models/index';
import { transaction as Transaction} from '../../models/index';

const routes = express.Router();

routes.post('/',
    async (req, res) => {
        let response = null;
        try {
            // logics
            const check = await UserEntity.findOne({ where: { id: req.body.userId } })
            if (check) {
                response = await Transaction.create(req.body);

                return res.status(httpStatus.OK).json(response);
            } else {
                return res.status(401).json({message:'Login e tente novamente'})
            }

        } catch (err) {
            //handle error
            console.log("###############################################")
            console.log(err)
            console.log("###############################################")

        }

    });


export default routes;
