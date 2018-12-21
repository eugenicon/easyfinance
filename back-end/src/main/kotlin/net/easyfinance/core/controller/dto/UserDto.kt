package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.User
import net.easyfinance.core.util.makeCopy

data class UserDto(val id: Long = 0,
                   val name: String = "") {

    fun asEntity() = this.makeCopy<User>()
}

fun User.asDto() = this.makeCopy<UserDto>()