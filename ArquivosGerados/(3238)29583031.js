    private class BroadcastReceiverListener extends BroadcastReceiver {&#xD;&#xA;    		@Override&#xD;&#xA;    		public void onReceive(Context context, Intent intent) {&#xD;&#xA;    			if (intent.getAction().equals(&#xD;&#xA;    					android.net.wifi.WifiManager.SCAN_RESULTS_AVAILABLE_ACTION)) {&#xD;&#xA;    		                  // This method"deliverBestAccessPoint" is in MainActivity class&#xD;&#xA;    						String a = deliverBestAccessPoint(updatedResults);&#xD;&#xA;    						//I want to set the "textwifi" varaible in MainActivity&#xD;&#xA;    						textWifi.setText(a.toString());&#xD;&#xA;    					}&#xD;&#xA;    			}&#xD;&#xA;    			else if (intent.getAction().equals(&#xD;&#xA;    					android.net.ConnectivityManager.CONNECTIVITY_ACTION)) {&#xD;&#xA;    				&#xD;&#xA;    			}&#xD;&#xA;    		}