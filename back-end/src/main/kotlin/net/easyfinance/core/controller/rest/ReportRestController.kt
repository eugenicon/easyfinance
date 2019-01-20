package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.ReportDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.service.BudgetService
import net.easyfinance.core.data.service.OperationService
import net.easyfinance.core.security.getUser
import net.easyfinance.core.util.sumBy
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/reports")
class ReportRestController(private val operationService: OperationService, private val budgetService: BudgetService) {
    @GetMapping("/budget-progress")
    fun getBudgetProgressData(auth: Authentication): MutableList<ReportDto> {
        val operations = operationService.findAllByUser(auth.getUser())
                .groupBy { it.category }.mapValues { it.value.sumBy { op -> op.sum }}.toMap()

        val budgets = budgetService.findAllByUser(auth.getUser()).map { it.category to it.asDto() }.toMap()

        val data = ArrayList<ReportDto>()
        operations.forEach { data.add(ReportDto(it.key?.asDto(), it.value, budgets[it.key])) }
        budgets.filter { !operations.containsKey(it.key) }.forEach { data.add(ReportDto(it.key?.asDto(), 0, it.value)) }

        return data
    }
}