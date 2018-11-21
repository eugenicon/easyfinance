package net.easyfinance.core.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@Configuration
@EnableWebSecurity
open class SecurityConfig : WebSecurityConfigurerAdapter() {
    @Value("\${application.security.permit}")
    private lateinit var permitUrls: Array<String>

    @Value("\${application.security.resources}")
    private lateinit var resources: Array<String>

    // This method is used for override HttpSecurity of the web Application.
    // We can specify our authorization criteria inside this method.
    override fun configure(http: HttpSecurity) {
        http.httpBasic()
                .and().authorizeRequests()
                .antMatchers(*permitUrls, *resources).permitAll()
                .anyRequest().authenticated()
                .and().csrf().disable()

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