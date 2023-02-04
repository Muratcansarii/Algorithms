/**
 * @author: KateVu
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 * You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices.
 * Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2
 * */

fun main(args: Array<String>) {
    val result = pairwise(listOf(1, 1, 1), 2)
    println("Result: $result")
}

fun pairwise(list: List<Int>, arg: Int): Int {
    //store used items
    var marker = mutableListOf<Int>()
    var sum: Int = 0 //sum

    for (i in list.indices) {
        //only do when i is not used
        if (!marker.contains(i)) {
            marker.add(i)
            //if value = arg -> add index into sum
            if (list[i] == arg) {
                sum += i
            } else {
                if (i < list.size - 1) {
                    for (j in (i + 1) until list.size) {
                        if (!marker.contains(j)) {
                            if (list[j] == arg - list[i]) {
                                sum += i + j
                                marker.add(j)
                                break
                            }
                        }
                    }
                }

            }
        }
    }

    return sum
}