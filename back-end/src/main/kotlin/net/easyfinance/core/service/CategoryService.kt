package net.easyfinance.core.service

import net.easyfinance.core.model.Category
import net.easyfinance.core.repository.CategoryRepository
import net.easyfinance.core.repository.OperationRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(private val repository: CategoryRepository, private val operationRepository: OperationRepository) {
    fun findAll(): MutableList<Category> = repository.findAll()

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Category) = repository.save(entity)

    fun delete(entity: Category) {
        operationRepository.deleteAllByCategory(entity)
        repository.delete(entity)
    }
}