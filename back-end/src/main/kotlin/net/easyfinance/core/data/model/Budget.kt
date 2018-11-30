package net.easyfinance.core.data.model

import javax.persistence.*

@Entity
data class Budget(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        @ManyToOne
        val category: Category? = null,
        @ManyToOne
        var user: User? = null,
        var sum: Long = 0
        )