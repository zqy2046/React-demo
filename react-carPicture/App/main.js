import React from 'react';
import dva from 'dva';
import { createLogger } from 'redux-logger';

import showCarModel from './models/showCarModel';
import router from './router.js';

const app = dva({ onAction: createLogger() });
app.model(showCarModel);
app.router(router);
app.start('#root');