package net.easyfinance.core.data.model

import java.util.*
import javax.persistence.*

@Entity
data class Operation(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long = 0,

        @ManyToOne
        var category: Category? = null,

        var description: String = "",

        var sum: Long = 0,

        @ManyToOne(fetch = FetchType.LAZY)
        var user: User? = null,

        var date: Date = Date()
)