package net.easyfinance.core.data.model

import java.util.*
import javax.persistence.*

@Entity
data class Operation(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        @ManyToOne
        var category: Category? = null,

        var description: String = "",

        var sum: Long = 0,

        @ManyToOne
        var user: User? = null,

        var date: Date = Date()
)