    public class PaneController implements Initializable{&#xD;&#xA;    	@FXML&#xD;&#xA;    	private LineChart<Number, Number> lineChart;&#xD;&#xA;    	@Override&#xD;&#xA;    	public void initialize(URL location, ResourceBundle resources) {&#xD;&#xA;    		// TODO Auto-generated method stub&#xD;&#xA;    		lineChart.setLegendVisible(false);&#xD;&#xA;    		lineChart.setCreateSymbols(false);&#xD;&#xA;    		lineChart.setData(createData());&#xD;&#xA;    		&#xD;&#xA;    		/** for each serie add label on the peak if intensity > 0 */&#xD;&#xA;    		for(int i=0;i<lineChart.getData().size();i++){&#xD;&#xA;    			for(XYChart.Data<Number, Number> value:lineChart.getData().get(i).getData()){&#xD;&#xA;    				if(value.getYValue().intValue()>0){&#xD;&#xA;    		    	value.nodeProperty().addListener(new ChangeListener<Node>() {&#xD;&#xA;    		            @Override public void changed(ObservableValue<? extends Node> ov, Node oldNode, final Node node) {&#xD;&#xA;    		            	System.out.println("value:"+node);&#xD;&#xA;    		                if (node != null) {&#xD;&#xA;    		                  displayLabelForData(value);&#xD;&#xA;    		                } &#xD;&#xA;    		              }&#xD;&#xA;    		            });&#xD;&#xA;    				}&#xD;&#xA;    		    }&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    	/** create data for the line chart */&#xD;&#xA;    	public ObservableList<Series<Number,Number>> createData(){&#xD;&#xA;    		 ObservableList<Series<Number,Number>> data = FXCollections.observableArrayList();&#xD;&#xA;    		 for(int i=1;i<=10;i++){&#xD;&#xA;    			 XYChart.Series<Number, Number> peakSelect = new XYChart.Series<>();&#xD;&#xA;    			 peakSelect.getData().add(new XYChart.Data<Number, Number>(i,0));&#xD;&#xA;    			 peakSelect.getData().add(new XYChart.Data<Number, Number>(i,i*2));&#xD;&#xA;    			 data.add(peakSelect);&#xD;&#xA;    		 }&#xD;&#xA;    		 return data;&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	  /** places a x value label on each peak */&#xD;&#xA;    	  private void displayLabelForData(XYChart.Data<Number, Number> data){&#xD;&#xA;    		  final Node node = data.getNode();&#xD;&#xA;    		  final Text dataText = new Text(data.getXValue() + "");&#xD;&#xA;    		  node.parentProperty().addListener(new ChangeListener<Parent>() {&#xD;&#xA;    			  @Override public void changed(ObservableValue<? extends Parent> ov, Parent oldParent, Parent parent) {&#xD;&#xA;    				  Group parentGroup = (Group) parent;&#xD;&#xA;    				  parentGroup.getChildren().add(dataText);&#xD;&#xA;    			  }&#xD;&#xA;    		  });&#xD;&#xA;    		  &#xD;&#xA;    		  node.boundsInParentProperty().addListener(new ChangeListener<Bounds>() {&#xD;&#xA;    			  @Override public void changed(ObservableValue<? extends Bounds> ov, Bounds oldBounds, Bounds bounds) {&#xD;&#xA;    				  &#xD;&#xA;    				  dataText.setLayoutX( Math.round( bounds.getMinX() + bounds.getWidth() / 2 - dataText.prefWidth(-1) / 2 ) );&#xD;&#xA;    				  dataText.setLayoutY( Math.round( bounds.getMinY() - dataText.prefHeight(-1) * 0.5 ) );&#xD;&#xA;    			  }&#xD;&#xA;    		  });&#xD;&#xA;    	  }&#xD;&#xA;    }