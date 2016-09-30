import bodyParser       from 'body-parser';
import cors             from 'cors';
import express          from 'express';
import expressValidator from 'express-validator';
import path             from 'path';

import config           from './config';

import clients          from './routes/clients';
import users            from './routes/users';

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(bodyParser.json());

app.use(cors());

const endpointPrefix = '/api/v' + config.get('version');

app.use(endpointPrefix + '/clients', clients);
app.use(endpointPrefix + '/users', users);

app.listen(8080, () => console.log('Running on localhost:8080'));

exports = module.exports = app;
