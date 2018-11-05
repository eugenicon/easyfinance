package net.easyfinance.core.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configurable
@EnableWebSecurity
public class WebConfig extends WebSecurityConfigurerAdapter {

    // This method is used for override HttpSecurity of the web Application.
    // We can specify our authorization criteria inside this method.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if (false) {
            http.authorizeRequests().anyRequest()
                    .permitAll().and().csrf().disable();
            return;
        }

        http.cors()
            .and().authorizeRequests()
                .antMatchers("/", "/user/register", "/user/login", "/user/logout").permitAll()
                .antMatchers("/**/*.js", "/**/*.css", "/**/*.ico").permitAll()
                .anyRequest().fullyAuthenticated()
            .and().csrf().disable();

        //http.cors().and()
        //        // starts authorizing configurations
        //        .authorizeRequests()
        //        // ignoring the guest's urls "
        //        .antMatchers("/user/register", "/user/login", "/user/logout").permitAll()
        //        // authenticate all remaining URLS
        //        .anyRequest().fullyAuthenticated().and()
        //        /* "/logout" will log the user out by invalidating the HTTP Session,
        //         * cleaning up any {link rememberMe()} authentication that was configured, */
        //        .logout()
        //        .permitAll()
        //        .logoutRequestMatcher(new AntPathRequestMatcher("/user/logout", "POST"))
        //        .and()
        //        // enabling the basic authentication
        //        .httpBasic().and()
        //        // configuring the session on the server
        //        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and()
        //        // disabling the CSRF - Cross Site Request Forgery
        //        .csrf().disable();
    }
}