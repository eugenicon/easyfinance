package net.easyfinance.core.data.model

import javax.persistence.*

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        @Column(nullable = false, unique = true)
        val name: String = "",

        @Column(nullable = false)
        var password: String = "",

        @ManyToOne
        var group: UserGroup? = null,

        @Column
        var firstName: String = "",

        @Column
        var lastName: String = ""
)