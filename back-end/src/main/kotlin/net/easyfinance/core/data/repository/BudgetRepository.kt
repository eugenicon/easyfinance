package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.data.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BudgetRepository: JpaRepository<Budget, Long> {
    fun findAllByUserIn(findRelated: Collection<User>): MutableList<Budget>
}