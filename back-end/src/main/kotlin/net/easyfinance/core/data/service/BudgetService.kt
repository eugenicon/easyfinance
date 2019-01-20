package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.BudgetRepository
import org.springframework.stereotype.Service

@Service
class BudgetService(private val repository: BudgetRepository, private val userService: UserService) {

    fun findAllByUser(user: User): MutableList<Budget> = repository.findAllByUserIn(userService.findRelated(user))

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Budget) = repository.save(entity)

    fun delete(entity: Budget) = repository.delete(entity)
}