package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.util.makeCopy

data class CategoryDto(val id: Long = 0,
                       val name: String = "",
                       val type: TransactionType = TransactionType.EXPENDITURE) {

    fun asEntity() = this.makeCopy<Category>()
}

fun Category.asDto() = this.makeCopy<CategoryDto>()