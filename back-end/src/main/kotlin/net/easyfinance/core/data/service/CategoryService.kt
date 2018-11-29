package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.repository.CategoryRepository
import net.easyfinance.core.data.repository.OperationRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(private val repository: CategoryRepository,
                      private val operationRepository: OperationRepository) {

    fun findAllByUserName(name: String): MutableList<Category> = repository.findAllByUserName(name)

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Category) = repository.save(entity)

    fun delete(entity: Category) {
        operationRepository.deleteAllByCategory(entity)
        repository.delete(entity)
    }
}