package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository: JpaRepository<Category, Long> {
    fun findAllByUserIn(users: Collection<User>): MutableList<Category>
}