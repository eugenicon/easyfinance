package net.easyfinance.core.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.AuthenticationEntryPoint


@Configuration
@EnableWebSecurity
open class SecurityConfig : WebSecurityConfigurerAdapter() {
    @Value("\${application.security.permit}")
    private lateinit var permitUrls: Array<String>

    @Value("\${application.security.resources}")
    private lateinit var resources: Array<String>

    @Autowired
    private lateinit var authenticationEntryPoint: AuthenticationEntryPoint

    @Bean
    open fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    override fun configure(http: HttpSecurity) {
        http.httpBasic()
                .authenticationEntryPoint(authenticationEntryPoint)
                .and().authorizeRequests()
                .antMatchers(*permitUrls, *resources).permitAll()
                .anyRequest().authenticated()
                .and().csrf().disable()
    }
}