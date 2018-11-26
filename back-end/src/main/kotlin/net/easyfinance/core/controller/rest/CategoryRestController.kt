package net.easyfinance.core.controller.rest

import net.easyfinance.core.model.Category
import net.easyfinance.core.model.TransactionType
import net.easyfinance.core.service.CategoryService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/categories")
class CategoryRestController(private val service: CategoryService) {

    @GetMapping("/all")
    fun getAll() = service.findAll()

    @GetMapping("/types")
    fun getTypes() = TransactionType.values()

    @PostMapping("/save")
    fun save(@RequestBody category: Category) {
        service.save(category)
    }
}