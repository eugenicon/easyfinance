package net.easyfinance.core.controller.rest

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/api")
class AuthenticationRestController {
    @GetMapping("/user/authenticated")
    fun user(user: Principal): Principal {
        return user
    }
}