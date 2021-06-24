    class MergeSortNonRecursive {&#xD;&#xA;        static Stack<ProgramFrame> callStack;&#xD;&#xA;        // this implement the merge algorithm seen in class. Feel free to call it.&#xD;&#xA;        public static void merge(int A[], int start, int mid, int stop) {&#xD;&#xA;            int index1 = start;&#xD;&#xA;            int index2 = mid + 1;&#xD;&#xA;            int tmp[] = new int[A.length];&#xD;&#xA;            int indexTmp = start;&#xD;&#xA;            while (indexTmp <= stop) {&#xD;&#xA;                if (index1 <= mid && (index2 > stop || A[index1] <= A[index2])) {&#xD;&#xA;                    tmp[indexTmp] = A[index1];&#xD;&#xA;                    index1++;&#xD;&#xA;                } else {&#xD;&#xA;                    if (index2 <= stop && (index1 > mid || A[index2] <= A[index1])) {&#xD;&#xA;                        tmp[indexTmp] = A[index2];&#xD;&#xA;                        index2++;&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;                indexTmp++;&#xD;&#xA;            }&#xD;&#xA;            for (int i = start; i <= stop; i++) A[i] = tmp[i];&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        static void mergeSort(int A[]) {&#xD;&#xA;            /* WRITE YOUR CODE HERE */&#xD;&#xA;            //stack we use&#xD;&#xA;            callStack = new Stack<ProgramFrame>();&#xD;&#xA;          &#xD;&#xA;            //initial program frame&#xD;&#xA;            ProgramFrame current = new ProgramFrame(0, A.length - 1, 1);&#xD;&#xA;          &#xD;&#xA;            //put frame on stack&#xD;&#xA;            callStack.push(current);&#xD;&#xA;          &#xD;&#xA;            //as long as our stack isn't empty...&#xD;&#xA;            while (!callStack.empty()) {&#xD;&#xA;          &#xD;&#xA;                //as long as the top Frame contains more than one integer&#xD;&#xA;                while (callStack.peek().start < callStack.peek().stop) {&#xD;&#xA;            &#xD;&#xA;                    //must be defined before pushing or else the values mess up&#xD;&#xA;                    int left = callStack.peek().start;&#xD;&#xA;                    int middle = (callStack.peek().start + callStack.peek().stop) / 2;&#xD;&#xA;                    int right = callStack.peek().stop;&#xD;&#xA;            &#xD;&#xA;                    current = new ProgramFrame(middle + 1, right, callStack.peek().PC++);&#xD;&#xA;                    callStack.push(current);&#xD;&#xA;                    //order ensures left is always on the top&#xD;&#xA;                    current = new ProgramFrame(left, middle, callStack.peek().PC++);&#xD;&#xA;                    callStack.push(current);&#xD;&#xA;                }&#xD;&#xA;                int PC = callStack.peek().PC; // need to check PC's&#xD;&#xA;                int start = callStack.peek().start;  //assign start and mid for merge&#xD;&#xA;                int mid = callStack.peek().stop; //assign left and middle for merge from the left frame&#xD;&#xA;                callStack.pop();&#xD;&#xA;          &#xD;&#xA;                //required if the next Frame (the right frame) isn't at its base of 1 integer and they have to be the same PC otherwise this will run continously&#xD;&#xA;                if ((callStack.peek().start != callStack.peek().stop) && (PC == callStack.peek().PC)) {&#xD;&#xA;            &#xD;&#xA;                    //must be defined before pushing or else the values mess up&#xD;&#xA;                    int left = callStack.peek().start;&#xD;&#xA;                    int middle = (callStack.peek().start + callStack.peek().stop) / 2;&#xD;&#xA;                    int right = callStack.peek().stop;&#xD;&#xA;                    current = new ProgramFrame(middle + 1, right, callStack.peek().PC++);&#xD;&#xA;                    callStack.push(current);&#xD;&#xA;                    //order ensures left is always on the top&#xD;&#xA;                    current = new ProgramFrame(left, middle, callStack.peek().PC++);&#xD;&#xA;                    callStack.push(current);&#xD;&#xA;                }&#xD;&#xA;                int stop = callStack.peek().stop; //get stop from the right frame&#xD;&#xA;          &#xD;&#xA;                merge(A, start, mid, stop); //merge &#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        //Static Error: This class does not have a static void main method accepting String[]. ??!??&#xD;&#xA;        public static void main(String args[]) throws Exception {&#xD;&#xA;     &#xD;&#xA;            // just for testing purposes&#xD;&#xA;            int myArray[] = {4,6,8,1,3,2,9,5,7,6,4,2,1,3,9,8,7,5};&#xD;&#xA;            mergeSort(myArray);&#xD;&#xA;            System.out.println("Sorted array is:\n");&#xD;&#xA;            for (int i = 0; i < myArray.length; i++) {&#xD;&#xA;                System.out.print(myArray[i] + " ");&#xD;&#xA;            }&#xD;&#xA;            System.out.println();&#xD;&#xA;        }&#xD;&#xA;    }