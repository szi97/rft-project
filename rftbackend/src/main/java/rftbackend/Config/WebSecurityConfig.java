package rftbackend.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import rftbackend.Logic.DatabaseLogic;
import rftbackend.Models.Leader;
import rftbackend.Models.Mentor;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DatabaseLogic dbLogic;

    //The configure(HttpSecurity) method defines which URL paths should be secured and which should not.
    // Specifically, the "/" and "/home" paths are configured to not require any authentication.
    // All other paths must be authenticated.
    //Nyilván ezt úgy lehet változtatni, ahogy éppen szeretnénk.

    //When a user successfully logs in, they will be redirected to the previously requested page that required authentication.
    // There is a custom "/login" page specified by loginPage(), and everyone is allowed to view it.
    //A "/login" page-et tetszésünk szerint módosíthatjuk, szépíthetjük, vagy más URL-re köthetjük.

    /*@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/#/bejelentkezes")
                .loginProcessingUrl("")
                .permitAll()
                .and()
                .logout()
                .permitAll();
    }*/

    //As for the userDetailsService() method, it sets up an in-memory user store with a single user.
    // That user is given a username of "user", a password of "password", and a role of "USER".
    //Nyilván ezt is testre kell szabnunk.

    @Bean
    @Override
    public UserDetailsService userDetailsService(){
        //Kell egy collection a userekkel
        //groupok a rolesba
        ArrayList<UserDetails> users = new ArrayList<>();

        /*UserDetails user =
                User.withDefaultPasswordEncoder()
                        .username("user")
                        .password("password")
                        .roles("USER")
                        .build();*/

        return new InMemoryUserDetailsManager(classifyUsers());
    }

    private ArrayList<UserDetails> classifyUsers(){
        ArrayList<UserDetails> users = new ArrayList<>();
        if(dbLogic.getMentors().isEmpty()){
            dbLogic.readMentorsFromDb();
        }
        List<Mentor> mentors = dbLogic.getMentors();
        for (Mentor actualMentor : mentors){
            String role = "";
            if(actualMentor.getResponsible() == null){
                role = "Mentor";
            }
            else{
                role = "Responsible";
            }
            UserDetails user =
                    User.withDefaultPasswordEncoder()
                            .username(actualMentor.getEmail())
                            .password(actualMentor.getPassword()) //megnézni ezt a kis encryptelős cuccot
                            .roles(role)
                            .build();
            users.add(user);
        }
        if(dbLogic.getLeaders().isEmpty()){
            dbLogic.readLeadersFromDb();
        }
        List<Leader> leaders = dbLogic.getLeaders();
        for (Leader actualLeader : leaders){
            UserDetails user =
                    User.withDefaultPasswordEncoder()
                            .username(actualLeader.getEmail())
                            .password(actualLeader.getPassword()) //megnézni ezt a kis encryptelős cuccot
                            .roles("Leader")
                            .build();
            users.add(user);
        }
        return users;
    }
}
