package net.easyfinance.core.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletRequest


@Controller
class TestController {
    @GetMapping("/test")
    fun showTestPage(request: HttpServletRequest): String {
        request.setAttribute("param1", "foo")
        request.setAttribute("param2", "bar")
        return "forward:/user/login"
    }
}