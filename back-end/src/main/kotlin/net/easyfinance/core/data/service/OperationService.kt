package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.data.repository.OperationRepository
import org.springframework.stereotype.Service

@Service
class OperationService(private val repository: OperationRepository) {
    fun findAll(): MutableList<Operation> = repository.findAll()

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Operation) = repository.save(entity)

    fun delete(entity: Operation) = repository.delete(entity)
}