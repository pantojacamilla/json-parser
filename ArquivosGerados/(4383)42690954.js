     for (int i = 0; i < numberOfSamples; i++) {&#xD;&#xA;    		    TableRow.LayoutParams vl = new TableRow.LayoutParams(30,30);&#xD;&#xA;    		    Button b = new Button(context);&#xD;&#xA;    		    b.setId(((blockNumber * 10000)+i));&#xD;&#xA;    			//b.setHint(i);&#xD;&#xA;    			//b.setHint(blockNumber);&#xD;&#xA;    	//	    double selectedGrade = 0;&#xD;&#xA;    	//	    if(FinalSurvey.multi[blockNumber][i] != 0){&#xD;&#xA;    	//	    	selectedGrade = FinalSurvey.multi[blockNumber][i];&#xD;&#xA;    	//	    }&#xD;&#xA;    	//	    final int makeHighlight = selectedGrade;&#xD;&#xA;    			b.setBackgroundDrawable(context.getResources().getDrawable(R.drawable.a));&#xD;&#xA;    			b.setAlpha(1.0f);&#xD;&#xA;    			b.setOnClickListener(new View.OnClickListener() {&#xD;&#xA;    				@Override&#xD;&#xA;    				public void onClick(View v) {&#xD;&#xA;    					ViewsAdding va = new ViewsAdding();&#xD;&#xA;    					va.showGrades(context, v, grades);&#xD;&#xA;    					view = v;&#xD;&#xA;    					maincontext = context;&#xD;&#xA;    				}&#xD;&#xA;    			});&#xD;&#xA;    	&#xD;&#xA;    			if(i%5 == 0){&#xD;&#xA;    				innerLayout = new LinearLayout(context);&#xD;&#xA;    				innerLayout.setOrientation(LinearLayout.HORIZONTAL);&#xD;&#xA;    				innerLayout.setLayoutParams(innerparams);&#xD;&#xA;    			    vl.setMargins(5, 5, 5, 5);&#xD;&#xA;    				b.setLayoutParams(vl);&#xD;&#xA;    				innerLayout.addView(b);&#xD;&#xA;    				if(i == numberOfSamples-1){&#xD;&#xA;    					mainLinearLayout.addView(innerLayout);&#xD;&#xA;    				}&#xD;&#xA;    				b = null;&#xD;&#xA;    			}else if (i%5 ==1) {&#xD;&#xA;    			    vl.setMargins(22, 5, 5, 5);&#xD;&#xA;    				b.setLayoutParams(vl);&#xD;&#xA;    				innerLayout.addView(b);&#xD;&#xA;    				if(i == numberOfSamples-1){&#xD;&#xA;    					mainLinearLayout.addView(innerLayout);&#xD;&#xA;    				}&#xD;&#xA;    				b = null;&#xD;&#xA;    			}else if (i%5 ==2) {&#xD;&#xA;    			    vl.setMargins(25, 5, 5, 5);&#xD;&#xA;    				b.setLayoutParams(vl);&#xD;&#xA;    				innerLayout.addView(b);&#xD;&#xA;    				mainLinearLayout.addView(innerLayout);&#xD;&#xA;    				b = null;&#xD;&#xA;    			}else if (i%5 ==3) {&#xD;&#xA;    				innerLayout = new LinearLayout(context);&#xD;&#xA;    				innerLayout.setOrientation(LinearLayout.HORIZONTAL);&#xD;&#xA;    				innerLayout.setLayoutParams(innerparams);&#xD;&#xA;    			    vl.setMargins(35, 5, 5, 5);&#xD;&#xA;    				b.setLayoutParams(vl);&#xD;&#xA;    				innerLayout.addView(b);&#xD;&#xA;    				if(i == numberOfSamples-1){&#xD;&#xA;    					mainLinearLayout.addView(innerLayout);&#xD;&#xA;    				}&#xD;&#xA;    				b = null;&#xD;&#xA;    			}else{&#xD;&#xA;    			    vl.setMargins(30, 5, 5, 5);&#xD;&#xA;    				b.setLayoutParams(vl);&#xD;&#xA;    				innerLayout.addView(b);&#xD;&#xA;    				mainLinearLayout.addView(innerLayout);&#xD;&#xA;    				b = null;&#xD;&#xA;    			}&#xD;&#xA;    		}&#xD;&#xA;    		return mainLinearLayout;&#xD;&#xA;    	}