package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.model.UserGroup
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserGroupRepository: JpaRepository<UserGroup, Long> {
    fun findByName(name: String): UserGroup
    fun findByKey(key: String): Optional<UserGroup>

    fun findAllByUsersContains(user: User): MutableSet<UserGroup>
}