
class ReverseSinglyLinkedList {
  solution(head) {
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev
  }
}
export { ReverseSinglyLinkedList }
