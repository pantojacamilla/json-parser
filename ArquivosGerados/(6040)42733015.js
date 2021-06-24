    public class FetchData2 {&#xD;&#xA;        private static Connection connection = null;&#xD;&#xA;       &#xD;&#xA;        public static Connection getConnection() {&#xD;&#xA;        	&#xD;&#xA;        	System.out.println("initial connection "+connection);	&#xD;&#xA;        	&#xD;&#xA;        	if (connection != null)&#xD;&#xA;                return connection;&#xD;&#xA;            else {&#xD;&#xA;            	// DB Connection&#xD;&#xA;        		try&#xD;&#xA;        		{	System.out.println("i am inside connection");			  &#xD;&#xA;        			Class.forName("oracle.jdbc.driver.OracleDriver");&#xD;&#xA;        			connection = DriverManager.getConnection("connection");&#xD;&#xA;        			System.out.println("Connection estabilished"+connection);&#xD;&#xA;        		}catch (Exception e){&#xD;&#xA;        			System.out.println("Connection error1: "+e);&#xD;&#xA;                } &#xD;&#xA;                return connection;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        public static ArrayList<Elements2> getAllElements2(String sino,String irepno) {    	&#xD;&#xA;        	connection = FetchData2.getConnection();&#xD;&#xA;            ArrayList<Elements2> itemListinsp = new ArrayList<Elements2>();     &#xD;&#xA;            &#xD;&#xA;            try {&#xD;&#xA;            	Statement statement1=connection.createStatement();&#xD;&#xA;                ResultSet rs = statement1.executeQuery("query1");&#xD;&#xA;              &#xD;&#xA;              &#xD;&#xA;                while(rs.next()) {	&#xD;&#xA;                	Elements2 iteminsp=new Elements2();	&#xD;&#xA;                	iteminsp.setParameters(rs.getString("parameters"));&#xD;&#xA;                	iteminsp.setSpecifications(rs.getString("specifications"));&#xD;&#xA;                	iteminsp.setActual1(rs.getString("actual1"));&#xD;&#xA;                	iteminsp.setActual2(rs.getString("actual2"));&#xD;&#xA;                	iteminsp.setActual3(rs.getString("actual3"));&#xD;&#xA;                	iteminsp.setActual4(rs.getString("actual4"));&#xD;&#xA;                	iteminsp.setActual5(rs.getString("actual5"));&#xD;&#xA;                    itemListinsp.add(iteminsp);&#xD;&#xA;                }            &#xD;&#xA;            } catch (Exception e) {&#xD;&#xA;            	System.out.println("Connection query exection error: "+e);&#xD;&#xA;            }&#xD;&#xA;            return itemListinsp;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        public static ArrayList<Elements2> getcritElements2(String icode) {&#xD;&#xA;        	connection = FetchData2.getConnection();&#xD;&#xA;        	System.out.println("I AM IN SECOND FETCH");&#xD;&#xA;            ArrayList<Elements2> listcrit = new ArrayList<Elements2>();&#xD;&#xA;            &#xD;&#xA;            System.out.println("incoming icode: "+icode);&#xD;&#xA;                    &#xD;&#xA;            try {&#xD;&#xA;            	Statement statementinsp=connection.createStatement();&#xD;&#xA;                ResultSet rsinsp = statementinsp.executeQuery("query2");&#xD;&#xA;                &#xD;&#xA;                if (!rsinsp.next() ) {&#xD;&#xA;                    System.out.println("no data");&#xD;&#xA;                } &#xD;&#xA;              &#xD;&#xA;                while(rsinsp.next()) {	&#xD;&#xA;                	Elements2 inspcrit=new Elements2();	&#xD;&#xA;                	inspcrit.setParameters(rsinsp.getString("parameters"));&#xD;&#xA;                	inspcrit.setSpecifications(rsinsp.getString("specifications"));&#xD;&#xA;                	listcrit.add(inspcrit);&#xD;&#xA;                }            &#xD;&#xA;            } catch (Exception e) {&#xD;&#xA;            	System.out.println("Connection query exection error: "+e);&#xD;&#xA;            }&#xD;&#xA;             System.out.println(listcrit.size());&#xD;&#xA;           System.out.println(listcrit.get(0).getParameters());&#xD;&#xA;           System.out.println(listcrit.get(0).getSpecifications());&#xD;&#xA;            return listcrit;&#xD;&#xA;        }&#xD;&#xA;    }