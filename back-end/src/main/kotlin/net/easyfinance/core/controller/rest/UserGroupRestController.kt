package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.UserGroupDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.model.UserGroup
import net.easyfinance.core.data.service.UserGroupService
import net.easyfinance.core.data.service.UserService
import net.easyfinance.core.security.getUser
import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*
import org.springframework.web.client.HttpClientErrorException
import java.util.*

@RestController
@RequestMapping("/api/groups")
open class UserGroupRestController(private val service: UserGroupService, private val userService: UserService) {
    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUser(userService.findByUsername(auth.name)).map { it.asDto() }

    @PostMapping("/save")
    open fun save(@RequestBody dto: UserGroupDto, auth: Authentication): UserGroup {
        val entity = if (dto.id == 0L) dto.asEntity() else service.findById(dto.id)
        val user = auth.getUser()
        if (entity.id == 0L) {
            entity.key = UUID.randomUUID().toString()
            entity.admin = user
        }
        entity.name = dto.name
        entity.users.add(user)
        return service.save(entity)
    }

    @PostMapping("/join")
    fun join(@RequestBody token: String, auth: Authentication): UserGroup {
        val group = service.findByKey(token).orElseThrow { HttpClientErrorException(HttpStatus.NOT_FOUND) }
        group.users.add(auth.getUser())
        return service.save(group)
    }

    @PostMapping("/leave")
    fun leave(@RequestBody key: String, auth: Authentication): UserGroup {
        val group = service.findByKey(key).orElseThrow { HttpClientErrorException(HttpStatus.NOT_FOUND) }
        group.users.remove(auth.getUser())
        return service.save(group)
    }
}