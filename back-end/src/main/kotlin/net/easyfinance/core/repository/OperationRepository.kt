package net.easyfinance.core.repository

import net.easyfinance.core.model.Operation
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface OperationRepository: JpaRepository<Operation, Long>