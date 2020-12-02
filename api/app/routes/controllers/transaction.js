import express from 'express';
import httpStatus from 'http-status';
import { user as UserEntity } from '../../models/index';
import { transaction as Transaction } from '../../models/index';


const routes = express.Router();

routes.post('/', //Cria transações
    async (req, res) => {
        let response = null;
        try {
            // logics
            const check = await UserEntity.findOne({ where: { id: req.body.userId } })
            if (check) {
                response = await Transaction.create(req.body);

                return res.status(httpStatus.OK).json(response);
            } else {
                return res.status(401).json({ message: 'Login e tente novamente' })
            }

        } catch (err) {
            //handle error
            console.log("###############################################")
            console.log(err)
            console.log("###############################################")

        }

    });

routes.get('/', //Retorna lista de transações pelo id do usuario (userId).
    async (req, res) => { 
        try {
            const list = await Transaction.findAll({ where: { userId: req.body.userId } });

            if (list.length > 0) {
                return res.status(httpStatus.OK).json(list)
            } else {
                return res.status(404).json({ message: "Usuario não encontrado" })
            }
        } catch (err) {
            //handle error
            console.log("###############################################")
            console.log(err)
            console.log("###############################################")

        }
    })
routes.put('/', //Atualiza transação
    async (req, res) => {
        try {
            var transaction = await Transaction.findOne({ where: { id: req.body.id } })
            if (transaction) {

                transaction = await transaction.update({
                    name: req.body.name,
                    description: req.body.description,
                    date: req.body.date,
                    amount: req.body.amount
                })
                return res.status(httpStatus.OK).json(transaction)
            } else {
                return res.status(404).json({ message: "Transação não encontrada" })
            }

        } catch (err) {
            console.log("###############################################")
            console.log(err)
            console.log("###############################################")
        }
    })

export default routes;
