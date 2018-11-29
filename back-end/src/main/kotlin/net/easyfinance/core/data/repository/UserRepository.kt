package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: JpaRepository<User, Long> {
    fun findByUsername(username: String): User
}