package net.easyfinance.core.controller.dto

data class ReportDto(var category: CategoryDto? = null,
                     var sum: Long = 0,
                     var budget: BudgetDto? = null)