import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";


function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done)  => {
        const user = await getUserByEmail(email);
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

    passport.serializeUser(function(user, done) {
        process.nextTick(function() {
            return done(null, {
                id: user.id,
                email: user.email,
            });
        });
    });

    passport.deserializeUser((id, done) => {
        process.nextTick(function() {
            return done(null, getUserById({_id: id}))
        });

    })

}

export default initialize;