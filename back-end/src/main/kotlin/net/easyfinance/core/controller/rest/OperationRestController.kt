package net.easyfinance.core.controller.rest

import net.easyfinance.core.service.OperationService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class OperationRestController(private val service: OperationService) {

    @GetMapping("/operations/all")
    fun getAll() = service.findAll()
}