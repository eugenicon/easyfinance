package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.UserGroup
import net.easyfinance.core.util.makeCopy

data class UserGroupDto(var id: Long = 0,
                     var name: String = "",
                     var key: String = "") {

    fun asEntity(): UserGroup {
        return this.makeCopy()
    }
}

fun UserGroup.asDto(): UserGroupDto {
    return this.makeCopy()
}