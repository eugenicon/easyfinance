package net.easyfinance.core.config

import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint
import org.springframework.stereotype.Component
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class MyBasicAuthenticationEntryPoint : BasicAuthenticationEntryPoint() {
    override fun commence(request: HttpServletRequest, response: HttpServletResponse, authEx: AuthenticationException?) {
        if (request.requestURI != "/user/login" && !request.requestURI.startsWith("/api")) {
            response.sendRedirect("/user/login")
        } else {
            super.commence(request, response, authEx)
        }
    }

    override fun afterPropertiesSet() {
        realmName = "/"
    }
}