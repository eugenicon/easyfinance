package net.easyfinance.core.data.model

import java.util.*
import javax.persistence.*
import kotlin.collections.HashSet


@Entity
data class UserGroup(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        @Column(nullable = false)
        var name: String = "",

        @Column(nullable = false, unique = true)
        var key: String = UUID.randomUUID().toString(),

        @ManyToMany
        var users: MutableSet<User> = HashSet(),

        @ManyToOne(fetch = FetchType.LAZY)
        var admin: User? = null
)