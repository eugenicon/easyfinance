package net.easyfinance.core.data.model

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
)