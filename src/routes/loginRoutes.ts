// import express from "express";
// import { setUser } from "../ controllers/index.js";
// import { validate } from "../middleware/index.js";
// import { locationMiddleware } from "../middleware/index.js";

// const loginRouter = express.Router();
// loginRouter.post("/userLogin", locationMiddleware, validate, setUser);

// export default loginRouter;

import express,{ Router } from "express";
import { locationMiddleware, validate } from "../middleware";
import { setUser } from "../ controllers";
class LoginRouter{
    public loginRouter:Router;
    constructor(){
        this.loginRouter=express.Router();
        this.setupRoutes();
    }

    private setupRoutes():void{
        this.loginRouter.post("/userLogin", locationMiddleware, validate, setUser);
    }
}

const loginRouterInstance=new LoginRouter();
export default loginRouterInstance.loginRouter;