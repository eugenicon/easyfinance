package net.easyfinance.core.data.model

import java.util.*
import javax.persistence.*

@Entity
data class Category(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        val name: String = "",

        val type: TransactionType = TransactionType.EXPENDITURE,

        @ManyToOne
        var user: User? = null
) {
    @OneToMany(cascade = [CascadeType.REMOVE], mappedBy = "category", orphanRemoval = true, fetch = FetchType.LAZY)
    var operations: MutableList<Operation> = ArrayList()

    @OneToMany(cascade = [CascadeType.REMOVE], mappedBy = "category", orphanRemoval = true, fetch = FetchType.LAZY)
    var budgets: MutableList<Budget> = ArrayList()
}