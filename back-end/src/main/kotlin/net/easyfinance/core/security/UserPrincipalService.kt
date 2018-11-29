package net.easyfinance.core.security

import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.service.UserService
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UserPrincipalService(private val userService: UserService): UserDetailsService {
    override fun loadUserByUsername(username: String): UserPrincipal {
        return UserPrincipal(userService.findByUsername(username))
    }
}

fun Authentication.getUser(): User = (this.principal as UserPrincipal).user