    import java.util.Random;&#xD;&#xA;    import java.util.Scanner;&#xD;&#xA;    import java.util.ArrayList;&#xD;&#xA;    import java.util.List;&#xD;&#xA;    public class DiceThing {&#xD;&#xA;      static Scanner scan = new Scanner(System.in);&#xD;&#xA;      static int trials;&#xD;&#xA;      static String bleh = new String("hurr");&#xD;&#xA;      static ArrayList < String > dice = new ArrayList < String > ();&#xD;&#xA;      static ArrayList < Integer > roll = new ArrayList < Integer > ();&#xD;&#xA;      static ArrayList < Integer > points = new ArrayList < Integer > ();&#xD;&#xA;      static ArrayList < Integer > num = new ArrayList < Integer > ();&#xD;&#xA;      static ArrayList < Integer > type = new ArrayList < Integer > ();&#xD;&#xA;      static ArrayList < ArrayList < Integer >> succ = new ArrayList < ArrayList < Integer >> ();&#xD;&#xA;      static Random rand = new Random();&#xD;&#xA;      public static void main(String[] args) {&#xD;&#xA;        System.out.println("Enter any number of dicesets. Enter 0 to stop");&#xD;&#xA;        while (!bleh.equals("0")) {&#xD;&#xA;          System.out.println("Enter diceset: ");&#xD;&#xA;          bleh = scan.nextLine();&#xD;&#xA;          if (!bleh.equals("0"))&#xD;&#xA;            dice.add(bleh);&#xD;&#xA;        }&#xD;&#xA;        System.out.println("Enter number of trials: ");&#xD;&#xA;        trials = scan.nextInt();&#xD;&#xA;        for (String i: dice) {&#xD;&#xA;          num.add(Integer.parseInt(i.substring(0, 1)));&#xD;&#xA;          type.add(Integer.parseInt(i.substring(2)));&#xD;&#xA;        }&#xD;&#xA;        for (int i = 0; i < dice.size(); i++) { //count place in dicesets&#xD;&#xA;          for (int j = 0; j < trials; j++) { //count trials&#xD;&#xA;            for (int k = 0; k < num.get(i); k++) //count number of dice in the diceset&#xD;&#xA;              roll.add(rand.nextInt(type.get(i)) + 1);&#xD;&#xA;            points.add(countSuccess(roll, type.get(i)));&#xD;&#xA;            System.out.println(roll.toString() + points.toString());&#xD;&#xA;            roll.clear();&#xD;&#xA;          }&#xD;&#xA;          succ.add(points);&#xD;&#xA;          //points.clear();&#xD;&#xA;          System.out.println(succ.toString());&#xD;&#xA;        }&#xD;&#xA;        System.out.println("Average success of dice sets:");&#xD;&#xA;        for (ArrayList < Integer > i: succ) {&#xD;&#xA;          System.out.println(average(i));&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      public static int countSuccess(ArrayList < Integer > list, int high) {&#xD;&#xA;        int suc = 0, temp;&#xD;&#xA;        for (int i = 0; i < list.size(); i++) {&#xD;&#xA;          if (list.get(i) >= 5)&#xD;&#xA;            suc++;&#xD;&#xA;          if (list.get(i) == high)&#xD;&#xA;            suc++;&#xD;&#xA;          if (list.get(i) >= 10) {&#xD;&#xA;            temp = rand.nextInt(type.get(i)) + 1;&#xD;&#xA;            roll.add(temp);&#xD;&#xA;            list.add(temp);&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return suc;&#xD;&#xA;      }&#xD;&#xA;      private static double average(ArrayList < Integer > marks) {&#xD;&#xA;        Integer sum = 0;&#xD;&#xA;        if (!marks.isEmpty()) {&#xD;&#xA;          for (Integer mark: marks) {&#xD;&#xA;            sum += mark;&#xD;&#xA;          }&#xD;&#xA;          return sum.doubleValue() / marks.size();&#xD;&#xA;        }&#xD;&#xA;        return sum;&#xD;&#xA;      }&#xD;&#xA;    }