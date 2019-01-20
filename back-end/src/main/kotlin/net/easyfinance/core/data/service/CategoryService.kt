package net.easyfinance.core.data.service

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.CategoryRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(private val repository: CategoryRepository) {

    fun findAllByUser(user: User): MutableList<Category> = repository.findAllByUserOrUserGroup(user, user.group)

    fun getById(id: Long) = repository.getOne(id)

    fun save(entity: Category) = repository.save(entity)

    fun delete(entity: Category) {
        repository.delete(entity)
    }
}