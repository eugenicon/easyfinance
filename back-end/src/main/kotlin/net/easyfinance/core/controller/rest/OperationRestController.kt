package net.easyfinance.core.controller.rest

import net.easyfinance.core.model.Operation
import net.easyfinance.core.service.OperationService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/operations")
class OperationRestController(private val service: OperationService) {

    @GetMapping("/all")
    fun getAll() = service.findAll()

    @PostMapping("/save")
    fun save(@RequestBody operation: Operation) {
        service.save(operation)
    }

    @DeleteMapping("/delete")
    fun delete(@RequestBody operation: Operation) {
        service.delete(operation)
    }
}