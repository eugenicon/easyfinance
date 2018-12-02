package net.easyfinance.core.data.model

enum class TransactionType {
    INCOME, EXPENDITURE
}

data class ReportData(var category: Category? = null,
                 var sum: Long = 0,
                 var budget: Budget? = null)

inline fun <T> Iterable<T>.sumBy(selector: (T) -> Long): Long {
    var sum: Long = 0
    for (element in this) {
        sum += selector(element)
    }
    return sum
}