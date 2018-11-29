package net.easyfinance.core.config

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.UserRepository

import net.easyfinance.core.data.repository.CategoryRepository
import net.easyfinance.core.data.repository.OperationRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.crypto.password.PasswordEncoder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2
import java.util.*

@Configuration
@EnableSwagger2
open class ApplicationConfig {
    @Bean
    open fun api(): Docket = Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.any())
            .paths(PathSelectors.any())
            .build()

    @Autowired
    fun initRepo(catRepo: CategoryRepository, opRepo: OperationRepository) {
        val catSource = ArrayList(listOf(
                Category(1L, "Food", TransactionType.EXPENDITURE),
                Category(2L, "Transport", TransactionType.EXPENDITURE),
                Category(3L, "Alcohol", TransactionType.EXPENDITURE),
                Category(4L, "Party", TransactionType.EXPENDITURE),
                Category(5L, "Salary", TransactionType.INCOME),
                Category(6L, "Credit", TransactionType.INCOME),
                Category(7L, "Gift", TransactionType.INCOME),
                Category(8L, "Present", TransactionType.EXPENDITURE),
                Category(9L, "Beer", TransactionType.EXPENDITURE)
        ))
        catRepo.saveAll(catSource)

        val opSource = (1..2000L).map {
            Operation(it, catRepo.findAll().random(), listOf("Novus","Metro","Jack Daniels","Party").random(), (10..1000L).random()) }

        opRepo.saveAll(opSource)
    }

    @Autowired
    fun initUsers(userRepo: UserRepository, passwordEncoder: PasswordEncoder) {
        val users = listOf(
                User(1, "user", passwordEncoder.encode("12345")),
                User(2, "other", passwordEncoder.encode("11111"))
        )

        userRepo.saveAll(users)
    }
}