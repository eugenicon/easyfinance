package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.data.service.CategoryService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/categories")
class CategoryRestController(private val service: CategoryService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUserName(auth.name)

    @GetMapping("/types")
    fun getTypes() = TransactionType.values()

    @PostMapping("/save")
    fun save(@RequestBody category: Category, auth: Authentication) {
        category.user = auth.getUser()
        service.save(category)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody category: Category) {
        service.delete(category)
    }
}