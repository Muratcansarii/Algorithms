/**
 * @author: KateVu
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
 * Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 */


fun main() {

    //val result = sym((listOf(1, 2, 3, 3)), (listOf(5, 2, 1, 4)))

    //sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
    val result = symDiff((listOf(1, 1, 2, 5)), (listOf(2, 2, 3, 5)), (listOf(3, 4, 5, 5)))

    println(result.toString())
}

/**
 * Sym diff with only two arrays
 */
fun sym(firstArray: List<Int>, secondArray: List<Int>): List<Int> {
    //get list of items in first array but not in second array
    val thirdArray = firstArray.filterNot { secondArray.contains(it) }
    //get list of item in second array but not in first array
    val fourthArray = secondArray.filterNot { firstArray.contains(it) }

    //combine two list and remove duplicated items
    return thirdArray.plus(fourthArray).distinct().toList()
}

/**
 * Sym diff with undefined number of list
 */

fun symDiff (vararg args: List<Int>): List<Int> {
    return if (args.size > 2) {
        val lastItem = args.last()
        val params = args.dropLast(1).toTypedArray()
        symDiff(symDiff(*params), lastItem)
    } else {
        val thirdArray = args[0].filterNot { args[1].contains(it) }
        //get list of item in second array but not in first array
        val fourthArray = args[1].filterNot { args[0].contains(it) }

        thirdArray.plus(fourthArray).distinct().toList()
    }
}

