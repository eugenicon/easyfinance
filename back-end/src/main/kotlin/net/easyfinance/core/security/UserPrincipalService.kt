package net.easyfinance.core.security

import net.easyfinance.core.data.service.UserService
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service

@Service
class UserPrincipalService(private val userService: UserService): UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails {
        return UserPrincipal(userService.findByUsername(username))
    }
}