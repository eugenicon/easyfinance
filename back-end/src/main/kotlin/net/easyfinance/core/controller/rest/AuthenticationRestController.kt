package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.User
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class AuthenticationRestController {
    @GetMapping("/user/authenticated")
    fun isAuthenticated(auth: Authentication?): User? {
        return if (auth?.isAuthenticated == true) auth.getUser() else null
    }
}