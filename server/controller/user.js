import users from "../model/users";

const userController = {
    list(req, res){
        res.status(200).send(users);
    },

    create(req, res){
        const {id, firstname, email} = req.body;
        if(!firstname || !email) res.status(400).send({message: 'fields should not be empty'});
        users.push(req.body);
        
        const result = users.filter(user => id === user.id);

        res.status(201).send(result);
    },

    update(req, res){
        const {id} = req.params;
        const {firstname, lastname, email, gender} = req.body;

        const result = users.filter(user => id === user.id);

        if(result){
            result[0].firstName = firstname;
            result[0].lastName = lastname;
            result[0].email = email;
            result[0].gender = gender;

            res.status(200).send(result[0]);
        }

        res.status(400).send({message: "user not found"});

    }
}

export default userController;