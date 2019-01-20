package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.model.UserGroup
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface BudgetRepository: JpaRepository<Budget, Long> {
    @Transactional
    fun deleteAllByCategory(category: Category)

    fun findAllByUserOrUserGroup(user: User, group: UserGroup?): MutableList<Budget>
}