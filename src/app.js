import express from 'express'
import cors from 'cors'
import session from "express-session";
import swaggerUi from 'swagger-ui-express'
import { fileURLToPath } from 'url';
import path from 'path';
import passport from 'passport'
import swaggerSpec from './config/swaggerConfig.js';
import swaggerDocument from './utils/swaggerDocuments.js';

import { ADMIN_AUTH, ADMIN_DASHBOARD, ROLE_BASE, SWAGGER } from './constants/api.js';

import RoleRoute from './route/role.js'

import AdminAuthRoute from './route/admin/auth/authRoute.js'
import AdminDashboardRoute from './route/admin/dashboard/dashboardRoute.js'

const app = express()


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use((req, res, next) => {
    res.locals.globalMessage = req.session.globalMessage || null;
    req.session.globalMessage = null;
    next();
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('working')
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const combinedSwaggerSpec = {
    ...swaggerSpec,
    ...swaggerDocument
}

app.use(SWAGGER, swaggerUi.serve, swaggerUi.setup(combinedSwaggerSpec))

app.use(ROLE_BASE, RoleRoute)
app.use(ADMIN_AUTH, AdminAuthRoute)
app.use(ADMIN_DASHBOARD, AdminDashboardRoute)

export default app