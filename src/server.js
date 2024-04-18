import express from 'express';
import * as authRoute from './routes/auth.route.js';
import * as projectRoute from './routes/project.route.js';
import * as userRoute from './routes/user.route.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.use(authRoute.getRouter());
app.use(projectRoute.getRouter());
app.use(userRoute.getRouter());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
