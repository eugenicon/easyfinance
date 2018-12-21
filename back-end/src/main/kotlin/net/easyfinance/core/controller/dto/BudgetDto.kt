package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.Budget
import net.easyfinance.core.util.makeCopy
import net.easyfinance.core.util.monthEnd
import net.easyfinance.core.util.monthStart
import java.util.*

data class BudgetDto(var id: Long = 0,
                     var category: CategoryDto? = null,
                     var sum: Long = 0,
                     var dateStart: Date = Date().monthStart(),
                     var dateEnd: Date = Date().monthEnd()) {

    fun asEntity(): Budget {
        val entity = this.makeCopy<Budget>()
        entity.category = this.category?.asEntity()
        return entity
    }
}

fun Budget.asDto(): BudgetDto {
    val dto = this.makeCopy<BudgetDto>()
    dto.category = this.category?.asDto()
    return dto
}