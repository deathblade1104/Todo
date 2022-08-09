import express, {Request , Response , NextFunction}  from 'express';
import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/todos',todosRoutes);

app.use((err : Error, req : Request , res : Response, next : NextFunction) => {
  res.status(500).json({message : err.message});
});

app.listen(3000, () => {
  console.log(`Server Started at http://localhost:3000`);
});