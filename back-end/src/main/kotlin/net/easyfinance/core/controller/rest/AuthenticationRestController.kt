package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.NewUserDto
import net.easyfinance.core.controller.dto.UserDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.service.UserService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/user")
class AuthenticationRestController(private val service: UserService, private val passwordEncoder: PasswordEncoder) {
    @GetMapping("/authenticated")
    fun isAuthenticated(auth: Authentication?): UserDto? {
        return if (auth?.isAuthenticated == true) auth.getUser().asDto() else null
    }

    @PostMapping("/register")
    fun register(@RequestBody user: NewUserDto) {
        val entity = user.asEntity()
        entity.password = passwordEncoder.encode(user.password)
        service.save(entity)
    }
}