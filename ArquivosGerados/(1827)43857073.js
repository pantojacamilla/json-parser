    class ResultSetTableModel extends AbstractTableModel&#xD;&#xA;    {&#xD;&#xA;    	private final Connection connection;&#xD;&#xA;    	private final Statement statement;&#xD;&#xA;    	private ResultSet resultSet;&#xD;&#xA;    	private ResultSetMetaData resultSetMetaData;&#xD;&#xA;    	private int numRowCount;&#xD;&#xA;    	//track DB connection status&#xD;&#xA;    	private boolean dbConnStatus = false;&#xD;&#xA;    	&#xD;&#xA;    	//constructor initializes rSet and obtains its&#xD;&#xA;    	//metadata object; also determines number of rows&#xD;&#xA;    	public ResultSetTableModel(String url, String query) throws SQLException&#xD;&#xA;    	{&#xD;&#xA;    		//connect to the database&#xD;&#xA;    		connection = DriverManager.getConnection(url);&#xD;&#xA;    		&#xD;&#xA;    		//create statement to query database&#xD;&#xA;    		statement = connection.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);&#xD;&#xA;    		&#xD;&#xA;    		//update database connection status&#xD;&#xA;    		dbConnStatus = true;&#xD;&#xA;    		&#xD;&#xA;    		//set query and execute it&#xD;&#xA;    		setQuery(query);&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//get class that represents column type&#xD;&#xA;    	@SuppressWarnings({ "unchecked", "rawtypes" })&#xD;&#xA;    	public Class getColumnClass(int column) throws IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		//determine Java class of column&#xD;&#xA;    		try&#xD;&#xA;    		{&#xD;&#xA;    			String className = resultSetMetaData.getColumnClassName(column + 1);&#xD;&#xA;    			&#xD;&#xA;    			//return Class object that represents class Name&#xD;&#xA;    			return Class.forName(className);&#xD;&#xA;    		}&#xD;&#xA;    		catch (Exception e)&#xD;&#xA;    		{&#xD;&#xA;    			e.printStackTrace();&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		return Object.class; //if problems occur above, assume type Object&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//remove row in the ResultSet&#xD;&#xA;    	public void removeRow(int row)&#xD;&#xA;    	{&#xD;&#xA;    //		try&#xD;&#xA;    //		{&#xD;&#xA;    //			resultSet.absolute(row);&#xD;&#xA;    //			resultSet.deleteRow();&#xD;&#xA;    //		}&#xD;&#xA;    //		catch (SQLException e)&#xD;&#xA;    //		{&#xD;&#xA;    //			e.printStackTrace();&#xD;&#xA;    //		}&#xD;&#xA;    //		fireTableRowsDeleted(row, row);&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//get the number of columns in the ResultSet&#xD;&#xA;    	public int getColumnCount() throws IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		//determine number of columns&#xD;&#xA;    		try&#xD;&#xA;    		{&#xD;&#xA;    			return resultSetMetaData.getColumnCount();&#xD;&#xA;    		}&#xD;&#xA;    		catch (SQLException sqlException)&#xD;&#xA;    		{&#xD;&#xA;    			sqlException.printStackTrace();&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		return 0; //if problem occur above, return 0 for number of columns&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//get name of a particular column in ResultSet&#xD;&#xA;    	public String getColumnName(int column) throws IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		//determine column name&#xD;&#xA;    		try&#xD;&#xA;    		{&#xD;&#xA;    			return resultSetMetaData.getColumnName(column + 1);&#xD;&#xA;    		}&#xD;&#xA;    		catch (SQLException sqlException)&#xD;&#xA;    		{&#xD;&#xA;    			sqlException.printStackTrace();&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		return ""; //if problems occur above, return empty string for column name	&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//return number of rows in ResultSet&#xD;&#xA;    	public int getRowCount() throws IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		return numRowCount;	&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//obtain value in particular row and column&#xD;&#xA;    	public Object getValueAt(int row, int column) throws IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		//obtain a value at specified ResultSet row and column&#xD;&#xA;    		try&#xD;&#xA;    		{&#xD;&#xA;    			resultSet.absolute(row + 1);&#xD;&#xA;    			return resultSet.getObject(column + 1);&#xD;&#xA;    		}&#xD;&#xA;    		catch (SQLException sqlException)&#xD;&#xA;    		{&#xD;&#xA;    			sqlException.printStackTrace();&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		return ""; //if problems occur above, return empty string object		&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//set new database query string&#xD;&#xA;    	public void setQuery(String query) throws SQLException, IllegalStateException&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(!dbConnStatus)&#xD;&#xA;    			throw new IllegalStateException("No connection to the Database");&#xD;&#xA;    		&#xD;&#xA;    		//specify query and execute it&#xD;&#xA;    		resultSet = statement.executeQuery(query);&#xD;&#xA;    		&#xD;&#xA;    		//obtain metadata for ResultSet&#xD;&#xA;    		resultSetMetaData = resultSet.getMetaData();&#xD;&#xA;    		&#xD;&#xA;    		//determine number of rows in ResultSet&#xD;&#xA;    		resultSet.last(); //move to last row&#xD;&#xA;    		numRowCount = resultSet.getRow(); //get row number&#xD;&#xA;    		&#xD;&#xA;    		//notify JTable that model has changed&#xD;&#xA;    		fireTableStructureChanged();&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	//close Statement and Connection&#xD;&#xA;    	public void disconnectFromDatabase()&#xD;&#xA;    	{&#xD;&#xA;    		//ensure database connection is available&#xD;&#xA;    		if(dbConnStatus);&#xD;&#xA;    		&#xD;&#xA;    		//determine number of columns&#xD;&#xA;    		try&#xD;&#xA;    		{&#xD;&#xA;    			resultSet.close();&#xD;&#xA;    			statement.close();&#xD;&#xA;    			connection.close();&#xD;&#xA;    		}&#xD;&#xA;    		catch (SQLException sqlException)&#xD;&#xA;    		{&#xD;&#xA;    			sqlException.printStackTrace();&#xD;&#xA;    		}&#xD;&#xA;    		finally&#xD;&#xA;    		{&#xD;&#xA;    			dbConnStatus = false;&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    } //end class ResultSetTableModel