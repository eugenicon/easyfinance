package net.easyfinance.core.data.model

import javax.persistence.*

@Entity
data class Account(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        val name: String = "",

        @ManyToOne
        var user: User? = null,

        var sum: Long = 0)