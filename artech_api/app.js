import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './middleware/error.js';
import rateLimit from 'express-rate-limit';
import * as http from 'http';
import helmet from 'helmet';
import 'dotenv/config.js';
import { config } from './config/index.js';
import compression from 'compression';

import siteRoutes from './routes/SiteContent.js';
import shopRoutes from './routes/Shop.js';
import typeWritersRoutes from './routes/Typewriters.js';
import writerRoutes from './routes/Writer.js';
import emailRoutes from './routes/Email.js';

const { port, allowedDomains } = config;

const app = express();

//Rate Limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10min
  max: 100,
});

app.use(limiter);
app.set('trust proxy', 1);

// Enable Cors
app.use(cors({ origin: allowedDomains }));

//HTTPS
app.use(helmet());

// Respons Compression
app.use(compression());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', siteRoutes);
app.use('/shop', shopRoutes);
app.use('/typewriters', typeWritersRoutes);
app.use('/typewriters/', writerRoutes);
app.use('/send', emailRoutes);

// Error Handler Middleware
app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));
