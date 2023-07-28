import BDD from "../model/BDD.cjs";
import Contact from "../model/Contact.js";

export default async (req, res) => {
    const {id} = req.body;
    try {
        const myBDD = new BDD();
        const contact = new Contact(myBDD);
        const data = await contact.deleted({id});
        res.json({data});
        console.log(data);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};