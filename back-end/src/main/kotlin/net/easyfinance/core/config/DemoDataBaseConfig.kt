package net.easyfinance.core.config

import net.easyfinance.core.data.model.Category
import net.easyfinance.core.data.model.Operation
import net.easyfinance.core.data.model.TransactionType
import net.easyfinance.core.data.model.User
import net.easyfinance.core.data.repository.CategoryRepository
import net.easyfinance.core.data.repository.OperationRepository
import net.easyfinance.core.data.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.security.crypto.password.PasswordEncoder
import java.util.*

@Configuration
open class DemoDataBaseConfig {

    @Autowired
    fun initRepo(catRepo: CategoryRepository, opRepo: OperationRepository, userRepo: UserRepository, passwordEncoder: PasswordEncoder) {
        if (userRepo.count() > 0) {
            return
        }

        val users = listOf(
                User(1, "user", passwordEncoder.encode("12345")),
                User(2, "other", passwordEncoder.encode("11111"))
        )

        userRepo.saveAll(users)

        val catSource = ArrayList(listOf(
                Category(1L, "Food", TransactionType.EXPENDITURE, users.random()),
                Category(2L, "Transport", TransactionType.EXPENDITURE, users.random()),
                Category(3L, "Alcohol", TransactionType.EXPENDITURE, users.random()),
                Category(4L, "Party", TransactionType.EXPENDITURE, users.random()),
                Category(5L, "Salary", TransactionType.INCOME, users.random()),
                Category(6L, "Credit", TransactionType.INCOME, users.random()),
                Category(7L, "Gift", TransactionType.INCOME, users.random()),
                Category(8L, "Present", TransactionType.EXPENDITURE, users.random()),
                Category(9L, "Beer", TransactionType.EXPENDITURE, users.random())
        ))
        catRepo.saveAll(catSource)

        val opSource = (1..2000L).map {
            val category = catRepo.findAll().random()
            Operation(it, category, listOf("Novus","Metro","Jack Daniels","Party").random(), (10..1000L).random(), category.user) }

        opRepo.saveAll(opSource)
    }
}