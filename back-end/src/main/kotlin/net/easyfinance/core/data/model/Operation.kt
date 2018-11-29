package net.easyfinance.core.data.model

import javax.persistence.*

@Entity
data class Operation(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        @ManyToOne val category: Category? = null,
        val description: String = "",
        var sum: Long = 0
)