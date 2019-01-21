package net.easyfinance.core.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.core.Authentication
import springfox.documentation.builders.PathSelectors
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

@Configuration
@EnableSwagger2
open class ApplicationConfig {
    @Bean
    open fun api(): Docket = Docket(DocumentationType.SWAGGER_2)
            .ignoredParameterTypes(Authentication::class.java)
            .select()
            .paths(PathSelectors.ant("/api/**"))
            .build()
}