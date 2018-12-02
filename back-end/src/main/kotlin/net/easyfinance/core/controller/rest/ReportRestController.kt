package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.ReportData
import net.easyfinance.core.data.model.sumBy
import net.easyfinance.core.data.service.BudgetService
import net.easyfinance.core.data.service.OperationService
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/reports")
class ReportRestController(private val operationService: OperationService, private val budgetService: BudgetService) {
    @GetMapping("/budget-progress")
    fun getBudgetProgressData(auth: Authentication): MutableList<ReportData> {
        val operations = operationService.findAllByUserName(auth.name)
                .groupBy { it.category }.mapValues { it.value.sumBy { op -> op.sum }}.toMap()

        val budgets = budgetService.findAllByUserName(auth.name).map { it.category to it }.toMap()

        val data = ArrayList<ReportData>()
        operations.forEach { data.add(ReportData(it.key, it.value, budgets[it.key])) }
        budgets.filter { !operations.containsKey(it.key) }.forEach { data.add(ReportData(it.key, 0, it.value)) }

        return data
    }
}