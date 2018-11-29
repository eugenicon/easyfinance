package net.easyfinance.core.controller.rest

import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.data.service.OperationService
import net.easyfinance.core.security.getUser
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/operations")
class OperationRestController(private val service: OperationService) {

    @GetMapping("/all")
    fun getAll(auth: Authentication) = service.findAllByUserName(auth.name)

    @PostMapping("/save")
    fun save(@RequestBody operation: Operation, auth: Authentication) {
        operation.user = auth.getUser()
        service.save(operation)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody operation: Operation) {
        service.delete(operation)
    }
}