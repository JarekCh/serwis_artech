import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './middleware/error.js';
import rateLimit from 'express-rate-limit';

import siteRoutes from './routes/SiteContent.js';
import shopRoutes from './routes/Shop.js';
import typeWritersRoutes from './routes/Typewriters.js';
import writerRoutes from './routes/Writer.js';
import emailRoutes from './routes/Email.js';

const PORT = process.env.PORT || 5000;

const app = express();

//Rate Limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10min
  max: 100,
});

app.use(limiter);
app.set('trust proxy', 1);

// Enable Cors
app.use(cors());

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
