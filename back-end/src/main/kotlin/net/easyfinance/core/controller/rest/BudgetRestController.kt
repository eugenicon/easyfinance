package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.data.service.BudgetService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/budgets")
class BudgetRestController(private val service: BudgetService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUserName(auth.name)

    @PostMapping("/save")
    fun save(@RequestBody entity: Budget, auth: Authentication) {
        entity.user = auth.getUser()
        service.save(entity)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody operation: Budget) {
        service.delete(operation)
    }
}