package net.easyfinance.core.data.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
data class Budget(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        @ManyToOne
        val category: Category? = null,

        @JsonIgnore
        @ManyToOne
        var user: User? = null,
        var sum: Long = 0
        )