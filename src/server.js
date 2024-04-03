import express from 'express';
import * as authRoute from './routes/auth.route.js';

const app = express();

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(authRoute.getRouter());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
