package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.model.UserGroup
import net.easyfinance.core.data.repository.UserGroupRepository
import org.springframework.stereotype.Service

@Service
class UserGroupService(private val repository: UserGroupRepository) {
    fun findByName(name: String) = repository.findByName(name)
    fun findByKey(key: String) = repository.findByKey(key)
    fun findAllByUser(user: User) = repository.findAllByUsersContains(user)

    fun findById(id: Long) = repository.getOne(id)

    fun save(entity: UserGroup) = repository.save(entity)
}