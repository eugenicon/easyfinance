package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.data.repository.BudgetRepository
import org.springframework.stereotype.Service

@Service
class BudgetService(private val repository: BudgetRepository) {

    fun findAllByUserName(name: String): MutableList<Budget> = repository.findAllByUserName(name)

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Budget) = repository.save(entity)

    fun delete(entity: Budget) = repository.delete(entity)
}