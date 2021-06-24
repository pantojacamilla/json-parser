    import acm.program.*;&#xD;&#xA;    public class DigitSum extends ConsoleProgram {&#xD;&#xA;    	public void run() {&#xD;&#xA;    		println("This program tells you how many digits is in a number");&#xD;&#xA;    		int n = readInt("Enter the number which you want to check: ");&#xD;&#xA;    		int dSum =0;&#xD;&#xA;    		println("The number of digits is: "+myMethod(n,dSum));&#xD;&#xA;    	}&#xD;&#xA;    	private int myMethod (int n, int dSum) {&#xD;&#xA;    		while (n>0) {&#xD;&#xA;    			dSum += n%10;&#xD;&#xA;    			n /= 10;&#xD;&#xA;    		}&#xD;&#xA;    		return dSum;&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    }