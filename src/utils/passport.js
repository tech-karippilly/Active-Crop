import Passport from "passport";
import GoogleStrategy from 'passport-google-oidc'
import dotenv from 'dotenv';
import { User, Role ,Wallet,Cart} from "../models/index.js";
dotenv.config();


function createSatergyGoogle() {
    Passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://www.activecrop.shop/auth/google/callback',
        scope: ['profile', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            if (accessToken) {

                const id = refreshToken.id
                const email = refreshToken.emails[0].value
                let user = await User.findOne({
                    $or: [
                        { googleId: id },
                        { email: email }
                    ]
                });

                if (!user) {
                    const userRole = await Role.findOne({ roleName: 'Customer' });
                    const newUser = User({
                        googleId: id,
                        firstName: refreshToken.name.givenName,
                        lastName: refreshToken.name.familyName,
                        userName: refreshToken.displayName,
                        phone: '1234567890',
                        password: `${refreshToken.displayName}@xxyz`,
                        email,
                        role: userRole._id,
                        isSecurityNeeded:true
                    })
                    await newUser.save()
                    const newWallet = Wallet({
                        userId: newUser._id
                    })
                    const newCart = Cart({
                        user_id: newUser._id
                    })
                    await newWallet.save();
                    await newCart.save();

                    return done(null, newUser);
                }
                user.googleId = id

                if (user.isBlocked) {
                    return done(null, false, { message: 'Your account has been blocked. Please contact support.' });
                }
                return done(null, user);
            }
        } catch (error) {
            return done(error, null);
        }

    }));

    Passport.serializeUser((user, done) => {
        done(null, user.id); // Serialize only the user's ID
    });

    Passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id)
        done(null, user);
    });

}

export default createSatergyGoogle




