const addTwoNumbers = require("./addTwoNumbers.js");

const flattenLL = (ll) => {
  let head = ll;
  let num = "";
  while (ll) {
    num = `${ll.val}${num}`;
    if (ll) {
      ll = ll.next;
    }
  }
  return num;
};
describe("addTwoNumbers test suite", () => {
  test("linked list of same length", () => {
    const l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };
    const l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    };
    expect(flattenLL(addTwoNumbers(l1, l2))).toBe("807");
  });
  test("linked list of length one both values 0", () => {
    const l1 = {
      val: 0,
      next: null
    };
    const l2 = {
      val: 0,
      next: null
    };
    expect(flattenLL(addTwoNumbers(l1, l2))).toBe("0");
  });
  test("linked list of larger numbers", () => {
    const l1 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: {
                  val: 9,
                  next: null
                }
              }
            }
          }
        }
      }
    };
    const l2 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: null
          }
        }
      }
    };
    expect(flattenLL(addTwoNumbers(l1, l2))).toBe("10009998");
  });
});
