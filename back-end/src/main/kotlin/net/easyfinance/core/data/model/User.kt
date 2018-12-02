package net.easyfinance.core.data.model

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        @Column(nullable = false, unique = true)
        val name: String = "",

        @JsonIgnore
        @Column(nullable = false)
        val password: String = ""
)