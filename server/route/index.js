import userController from "../controller/user";

const route = (app) => {
    app.get("/api/user", userController.list);
    app.post("/auth/signup", userController.create);
    app.put("/api/user/:id", userController.update);
}

export default route;