package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.SimpleUserDto
import net.easyfinance.core.controller.dto.UserDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.service.UserService
import net.easyfinance.core.security.getUser
import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*
import org.springframework.web.client.HttpClientErrorException

@RestController
@RequestMapping("/api/user")
class AuthenticationRestController(private val service: UserService, private val passwordEncoder: PasswordEncoder) {
    @GetMapping("/authenticated")
    fun isAuthenticated(auth: Authentication?): SimpleUserDto? {
        return if (auth?.isAuthenticated == true) auth.getUser().asDto() else null
    }

    @PostMapping("/register")
    fun register(@RequestBody user: UserDto) {
        val entity = user.asEntity()
        entity.password = passwordEncoder.encode(user.password)
        service.save(entity)
    }

    @PostMapping("/save")
    fun save(@RequestBody user: UserDto, auth: Authentication) {
        val entity = auth.getUser()
        if (entity.id != user.id) {
            throw HttpClientErrorException(HttpStatus.FORBIDDEN)
        }
        entity.firstName = user.firstName ?: ""
        entity.lastName = user.lastName ?: ""
        if (!user.newPassword.isEmpty()) {
            entity.password = passwordEncoder.encode(user.newPassword)
        }
        service.save(entity)
    }
}