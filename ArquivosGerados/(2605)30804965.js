    String name;&#xD;&#xA;    int leftNum, rightNum;&#xD;&#xA;    //Scan the text file&#xD;&#xA;    Scanner scan = new Scanner(Explore.class.getResourceAsStream("pay.txt"));&#xD;&#xA;    while (scan.hasNext()) { //finds next line&#xD;&#xA;      name = scan.next(); //find the name on the line&#xD;&#xA;      leftNum = scan.nextInt(); //get price&#xD;&#xA;      rightNum = scan.nextInt(); //get quantity&#xD;&#xA;      int ans = leftNum * rightNum; //Multiply Price and Quanity&#xD;&#xA;      System.out.println(name + " : " + ans);&#xD;&#xA;    }&#xD;&#xA;    // if name is Emma,&#xD;&#xA;    //  get that number next to her name&#xD;&#xA;    //  and all the numbers next to name Emma are added together&#xD;&#xA;    // get total of the numbers added together for Emma&#xD;&#xA;    // if else name is Sofia,&#xD;&#xA;    // Do the same steps as above for Emma and find total&#xD;&#xA;    // if else name is Olivia,&#xD;&#xA;    // same as above and find total