package net.easyfinance.core.controller.dto

import net.easyfinance.core.data.model.User
import net.easyfinance.core.util.makeCopy

data class SimpleUserDto(val id: Long = 0,
                         val name: String = "",
                         val firstName: String = "",
                         val lastName: String = "") {

    fun asEntity() = this.makeCopy<User>()
}

data class UserDto(val id: Long = 0,
                   val name: String = "",
                   val password: String = "",
                   val firstName: String? = "",
                   val lastName: String? = "",
                   val newPassword: String = "") {

    fun asEntity() = this.makeCopy<User>()
}

fun User.asDto() = this.makeCopy<SimpleUserDto>()