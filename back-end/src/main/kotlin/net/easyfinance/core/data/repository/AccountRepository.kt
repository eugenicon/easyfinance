package net.easyfinance.core.data.repository

import net.easyfinance.core.data.model.Account
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AccountRepository: JpaRepository<Account, Long> {
    fun findAllByUserName(name: String): MutableList<Account>
}