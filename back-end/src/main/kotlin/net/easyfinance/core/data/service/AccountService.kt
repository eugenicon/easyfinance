package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Account
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.AccountRepository
import org.springframework.stereotype.Service

@Service
class AccountService(private val repository: AccountRepository) {

    fun findAllByUser(user: User): MutableList<Account> = repository.findAllByUserOrUserGroupAndUserGroupNotNull(user, user.group)

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Account) = repository.save(entity)

    fun delete(entity: Account) = repository.delete(entity)
}