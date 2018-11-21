package net.easyfinance.core.controller.rest

import net.easyfinance.core.service.CategoryService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class CategoryRestController(private val service: CategoryService) {

    @GetMapping("/categories/all")
    fun getAll() = service.findAll()
}