package net.easyfinance.core.controller.rest

import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class AuthenticationRestController {
    @GetMapping("/user/authenticated")
    fun isAuthenticated( authentication: Authentication?): Boolean {
        return authentication?.isAuthenticated ?: false
    }
}