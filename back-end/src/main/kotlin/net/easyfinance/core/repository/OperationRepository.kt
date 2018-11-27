package net.easyfinance.core.repository

import net.easyfinance.core.model.Category
import net.easyfinance.core.model.Operation
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface OperationRepository: JpaRepository<Operation, Long> {
    @Transactional
    fun deleteAllByCategory(category: Category)
}