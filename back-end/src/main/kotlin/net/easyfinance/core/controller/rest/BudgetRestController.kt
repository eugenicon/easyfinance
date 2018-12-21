package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.BudgetDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.service.BudgetService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/budgets")
class BudgetRestController(private val service: BudgetService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUserName(auth.name).map { it.asDto() }

    @PostMapping("/save")
    fun save(@RequestBody dto: BudgetDto, auth: Authentication) {
        val entity = dto.asEntity().apply { user = auth.getUser() }
        service.save(entity)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody dto: BudgetDto) {
        service.delete(dto.asEntity())
    }
}