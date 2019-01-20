package net.easyfinance.core.data.model

import net.easyfinance.core.util.monthEnd
import net.easyfinance.core.util.monthStart
import java.util.*
import javax.persistence.*

@Entity
data class Budget(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        @ManyToOne
        var category: Category? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        var user: User? = null,

        var sum: Long = 0,

        var dateStart: Date = Date().monthStart(),
        var dateEnd: Date = Date().monthEnd()
)