package net.easyfinance.core.service

import net.easyfinance.core.model.Operation
import net.easyfinance.core.repository.OperationRepository
import org.springframework.stereotype.Service

@Service
class OperationService(private val repository: OperationRepository) {
    fun findAll(): MutableList<Operation> = repository.findAll()

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Operation) = repository.save(entity)
}