package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.UserDto
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class AuthenticationRestController {
    @GetMapping("/user/authenticated")
    fun isAuthenticated(auth: Authentication?): UserDto? {
        return if (auth?.isAuthenticated == true) UserDto(auth.name) else null
    }
}