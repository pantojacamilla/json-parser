    import java.util.Scanner;&#xD;&#xA;    public class FruitVegShop&#xD;&#xA;    {&#xD;&#xA;    	private void printWelcomeMessage()&#xD;&#xA;    	{ // print the welcome message&#xD;&#xA;    	System.out.println("                Welcome to Rocky Fruit and Vegetable Market");&#xD;&#xA;    	}&#xD;&#xA;    	private String enterCustomerName()&#xD;&#xA;    	{ // prompt for, read and return a customer name&#xD;&#xA;    		Scanner in = new Scanner (System.in);&#xD;&#xA;    		System.out.println("Enter the name of the customer ==> ");&#xD;&#xA;    		String customerName;&#xD;&#xA;    		customerName = in.nextLine();&#xD;&#xA;    	    return customerName;&#xD;&#xA;    	}&#xD;&#xA;    	private String enterProduceName()&#xD;&#xA;    	{ // prompt for, read and return the name of the produce&#xD;&#xA;    		Scanner in = new Scanner(System.in);&#xD;&#xA;    		System.out.println("Enter the name of the produce ==> ");&#xD;&#xA;    		String produceName;&#xD;&#xA;    		produceName = in.nextLine();&#xD;&#xA;    		return produceName;&#xD;&#xA;    	}&#xD;&#xA;    	private void printPurchaseNumber(int purchaseNumber)&#xD;&#xA;    	{ // print the number of the purchase&#xD;&#xA;    		int counter = 0;&#xD;&#xA;    		while ( counter <= 3 ) // loop the order 3 times&#xD;&#xA;    	&#xD;&#xA;    	}&#xD;&#xA;    	private double enterProduceWeight(String name)&#xD;&#xA;    	{ // prompt for, read and return the weight of the produce&#xD;&#xA;    		Scanner in = new Scanner (System.in);&#xD;&#xA;    		System.out.printf("Enter the weight (kg) of the %s\n ==> ", produceName);&#xD;&#xA;    		double produceWeight;&#xD;&#xA;    		produceWeight = in.nextDouble();&#xD;&#xA;    		return produceWeight;&#xD;&#xA;    	}&#xD;&#xA;    	private double enterProduceCost(String name)&#xD;&#xA;    	{ // prompt for, read and return the cost of the produce&#xD;&#xA;    		Scanner in = new Scanner (System.in);&#xD;&#xA;    		System.out.printf("Enter the cost per kg of the %s\n ==> ", produceName);&#xD;&#xA;    		double produceCostPerKg;&#xD;&#xA;    		produceCostPerKg = in.nextDouble();&#xD;&#xA;    		return produceCostPerKg;&#xD;&#xA;    	}&#xD;&#xA;    	private void printPurchase(String produceName, double produceWeight, double produceCostPerKg, double cost)&#xD;&#xA;    	{ // print the details of one pruchase&#xD;&#xA;    	double produceCost;&#xD;&#xA;    	System.out.println("--------------------------------------------------");&#xD;&#xA;    	System.out.printf("%f\n of %s\n at $%.2f\n per kg is $%.2f\n", produceWeight, produceName, produceCostPerKg, produceCost);&#xD;&#xA;    	System.out.println("--------------------------------------------------");&#xD;&#xA;    	produceCost = produceWeight * produceCostPerKg;&#xD;&#xA;    	}&#xD;&#xA;    	private boolean discount(String name)&#xD;&#xA;    	{ // determine if the customer is eligle for a discount and return true or false&#xD;&#xA;    		Scanner in = new Scanner(System.in);&#xD;&#xA;    		if (in.nextLine().equalsIgnoreCase("y"))&#xD;&#xA;    			return true;&#xD;&#xA;    		else&#xD;&#xA;                return false;&#xD;&#xA;    	}&#xD;&#xA;    	private void printTotalCost(String name, int numberOfPurchases, double cost, boolean discount)&#xD;&#xA;    	{ // print the total cost of the order and discount information if neccessary&#xD;&#xA;    		double totalCost;&#xD;&#xA;    		double discountValue;&#xD;&#xA;    		System.out.println("**********************************************************************");&#xD;&#xA;    		System.out.printf("%s\n the total for %d\n fruit and vegetable purchases is $%.2f\n", customerName, purchaseNumber, totalCost);&#xD;&#xA;    		System.out.printf("This includes a discount of $%.2d\n", discountValue);&#xD;&#xA;    		System.out.println("**********************************************************************");&#xD;&#xA;    		// make a addition counter for the order.&#xD;&#xA;    		// set a discount value&#xD;&#xA;    	}&#xD;&#xA;    	private void printExitMessage(String name)&#xD;&#xA;    	{ // print the exit message&#xD;&#xA;    		System.out.printf("Thank you %s\n for shopping at the Rocky Fruit and Vegetable Market", customerName);&#xD;&#xA;    		System.out.println("Written by s0270780");&#xD;&#xA;    	}&#xD;&#xA;    	private void processCustomer()&#xD;&#xA;    	{ // process one customer's order&#xD;&#xA;    		String customerName,		// the name of the customer&#xD;&#xA;    				produceName;		// the name of the produce&#xD;&#xA;    		double produceWeight,		// the weight of the produce&#xD;&#xA;    				produceCostPerKg,	// the cost per kilo of the produce&#xD;&#xA;    				purchaseCost,		// the cost of the purchase&#xD;&#xA;    				totalCost = 0;		// the total cost of the order&#xD;&#xA;    		int purchaseNumber = 0;		// the number of the current purchase&#xD;&#xA;    		boolean discount;			// boolean to say if customer is eligible for a discount&#xD;&#xA;    		printWelcomeMessage();		// print the title message&#xD;&#xA;    		customerName = enterCustomerName(); // get the customer name&#xD;&#xA;    		purchaseNumber++;									// increment the number of the purchase&#xD;&#xA;    		printPurchaseNumber(purchaseNumber);				// print the number of the purchase&#xD;&#xA;    		produceName = enterProduceName();					// get the name of the produce item&#xD;&#xA;    		produceWeight = enterProduceWeight(produceName);	// get the weight of the purchase&#xD;&#xA;    		produceCostPerKg = enterProduceCost(produceName);	// get the cost per kg&#xD;&#xA;    		purchaseCost = produceWeight * produceCostPerKg;	// calculate the cost of the purchase&#xD;&#xA;    		totalCost += purchaseCost;							// add to total cost&#xD;&#xA;    		printPurchase(produceName, produceWeight, produceCostPerKg, purchaseCost); // print the purchase details&#xD;&#xA;    		discount = discount(customerName);	// determine if the customer is eligible for a discount&#xD;&#xA;    		printTotalCost(customerName, purchaseNumber, totalCost, discount); // print the total cost&#xD;&#xA;    		printExitMessage(customerName);	// print the final exit message&#xD;&#xA;    	}&#xD;&#xA;    	public static void main(String [] args)&#xD;&#xA;    	{&#xD;&#xA;    		FruitVegShop fruitVegShop = new FruitVegShop();&#xD;&#xA;    		fruitVegShop.processCustomer();&#xD;&#xA;    	}&#xD;&#xA;    }