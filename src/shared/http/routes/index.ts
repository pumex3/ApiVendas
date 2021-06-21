/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { response, Router} from 'express'


const routes = Router();

routes.get('/', (req,res) => {
    return res.json({mensagem: 'Ok'});
});

export default routes;
