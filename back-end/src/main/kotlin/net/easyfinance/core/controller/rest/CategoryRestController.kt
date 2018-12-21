package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.CategoryDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.data.service.CategoryService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/categories")
class CategoryRestController(private val service: CategoryService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUserName(auth.name).map { it.asDto() }

    @GetMapping("/types")
    fun getTypes() = TransactionType.values()

    @PostMapping("/save")
    fun save(@RequestBody dto: CategoryDto, auth: Authentication) {
        val entity = dto.asEntity().apply { user = auth.getUser() }
        service.save(entity)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody dto: CategoryDto) {
        service.delete(dto.asEntity())
    }
}