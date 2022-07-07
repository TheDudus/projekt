import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import router from "./routes/login.js";

function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done)  => {
        const user = getUserByEmail(email);
        if(user == null)
        {
            return done(null, false, {message:'Brak takiego użytkownika'});
        }

        try{
            if(await bcrypt.compare(password, user.password))
            {
                return done(null, user);
            }
            else
            {
                return done(null, false, {message:'Złe hasło!'});
            }
        } catch(e) {
            return  done(e);
        }

    }
    passport.use(new LocalStrategy.Strategy({usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })

}

export default initialize;
//export default  router;