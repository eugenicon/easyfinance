package net.easyfinance.core.data.model

import javax.persistence.*


@Entity
data class UserGroup(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        @Column(nullable = false)
        val name: String = "",

        @OneToMany(mappedBy = "group")
        var users: MutableList<User> = ArrayList()
)