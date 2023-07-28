import BDD from "../model/BDD.cjs";
import Users from "../model/Users.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const user = new Users(myBDD);
        const data = await user.deleted({id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};