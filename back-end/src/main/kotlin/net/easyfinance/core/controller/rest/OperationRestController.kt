package net.easyfinance.core.controller.rest

import net.easyfinance.core.controller.dto.OperationDto
import net.easyfinance.core.controller.dto.asDto
import net.easyfinance.core.data.service.OperationService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/operations")
class OperationRestController(private val service: OperationService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUser(auth.getUser()).map { it.asDto() }

    @PostMapping("/save")
    fun save(@RequestBody dto: OperationDto, auth: Authentication) {
        val entity = dto.asEntity().apply { user = auth.getUser() }
        service.save(entity)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody dto: OperationDto) {
        service.delete(dto.asEntity())
    }
}