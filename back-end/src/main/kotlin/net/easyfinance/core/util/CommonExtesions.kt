package net.easyfinance.core.util

import java.util.*


inline fun <T> Iterable<T>.sumBy(selector: (T) -> Long): Long {
    var sum: Long = 0
    for (element in this) {
        sum += selector(element)
    }
    return sum
}

fun Date.monthStart(): Date {
    val calendar = Calendar.getInstance()
    calendar.time = this
    calendar.set(Calendar.DAY_OF_MONTH, 1)
    calendar.set(Calendar.HOUR_OF_DAY, 0)
    calendar.set(Calendar.MINUTE, 0)
    calendar.set(Calendar.SECOND, 0)
    calendar.set(Calendar.MILLISECOND, 0)
    return calendar.time
}

fun Date.monthEnd(): Date {
    val calendar = Calendar.getInstance()
    calendar.time = this
    calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH))
    calendar.set(Calendar.HOUR_OF_DAY, calendar.getActualMaximum(Calendar.HOUR_OF_DAY))
    calendar.set(Calendar.MINUTE, calendar.getActualMaximum(Calendar.MINUTE))
    calendar.set(Calendar.SECOND, calendar.getActualMaximum(Calendar.SECOND))
    calendar.set(Calendar.MILLISECOND, calendar.getActualMaximum(Calendar.MILLISECOND))
    return calendar.time
}

inline fun <reified T> Any.makeCopy() : T {
    val copyClass = T::class.java
    val copyFields = copyClass.declaredFields.map { it.name to it }.toMap()
    val copyInstance = copyClass.newInstance()
    this.javaClass.declaredFields
            .filter { it.type == copyFields[it.name]?.type }
            .map { it to copyFields[it.name]!! }
            .forEach {(fieldOriginal, fieldCopy) ->
                fieldOriginal.isAccessible = true
                fieldCopy.isAccessible = true
                fieldCopy.set(copyInstance, fieldOriginal.get(this))
            }
    return copyInstance
}