package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.data.service.CategoryService
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

    @DeleteMapping("/delete")
    fun delete(@RequestBody category: Category) {
        service.delete(category)
    }
}