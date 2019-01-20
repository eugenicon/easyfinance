package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.data.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface OperationRepository: JpaRepository<Operation, Long> {
    fun findAllByUserIn(findRelated: Collection<User>): MutableList<Operation>
}