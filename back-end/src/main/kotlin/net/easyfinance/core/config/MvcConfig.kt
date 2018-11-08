package net.easyfinance.core.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
open class MvcConfig : WebMvcConfigurer {

    @Value("\${view.frontend-managed-urls}")
    lateinit var frontendManagedUrls: Array<String>

    @Value("\${view.forward-to-frontend-url}")
    lateinit var forwardToFrontendUrl: String

    override fun addViewControllers(registry: ViewControllerRegistry) {
        frontendManagedUrls.forEach { registry.addViewController(it).setViewName(forwardToFrontendUrl) }
    }
}