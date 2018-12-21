package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.util.makeCopy

data class OperationDto(var id: Long = 0,
                        var description: String = "",
                        var sum: Long = 0,
                        var category: CategoryDto? = null) {

    fun asEntity(): Operation {
        val entity = this.makeCopy<Operation>()
        entity.category = this.category?.asEntity()
        return entity
    }
}

fun Operation.asDto(): OperationDto {
    val dto = this.makeCopy<OperationDto>()
    dto.category = this.category?.asDto()
    return dto
}