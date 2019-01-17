package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val repository: UserRepository) {
    fun findByUsername(username: String): User {
        return repository.findByName(username)
    }
}