package net.easyfinance.core.data.model

import javax.persistence.*

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long = 0,

        @Column(nullable = false, unique = true)
        val name: String = "",

        @Column(nullable = false)
        var password: String = "",

        @Column
        var firstName: String = "",

        @Column
        var lastName: String = ""
)