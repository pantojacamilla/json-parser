           for(int i=0;i<noOfCols1;i++)&#xD;&#xA;            {&#xD;&#xA;            	for(int j=1;j<=noOfRows1;j++)&#xD;&#xA;            	{&#xD;&#xA;            		value1 = formatter.formatCellValue(sheet1.getRow(j).getCell(i));&#xD;&#xA;            			for(int m=1;m<=noOfRows2;m++)&#xD;&#xA;            			{&#xD;&#xA;            				value2 = formatter.formatCellValue(sheet2.getRow(m).getCell(i));&#xD;&#xA;            				value1= value1.trim();&#xD;&#xA;            				value2=value2.trim();&#xD;&#xA;            				int value2Position = sheet2.getRow(m).getCell(i).getRowIndex();&#xD;&#xA;            				if(!positions.contains(value2Position))&#xD;&#xA;            				{&#xD;&#xA;            				 if(value1.contentEquals(value2))&#xD;&#xA;            				 {&#xD;&#xA;            					positions.add(value2Position);&#xD;&#xA;            					matched = true;&#xD;&#xA;            				 }&#xD;&#xA;            				 else{&#xD;&#xA;            					 matched = false;&#xD;&#xA;            				 }&#xD;&#xA;            				}&#xD;&#xA;            				if(matched==true)&#xD;&#xA;            				{&#xD;&#xA;            					break;&#xD;&#xA;            				}&#xD;&#xA;            			}&#xD;&#xA;            			if(matched == false)&#xD;&#xA;            			{   &#xD;&#xA;            				int k=1;&#xD;&#xA;            				if(cFilledPositions.isEmpty())   //If condition[i]&#xD;&#xA;            				{&#xD;&#xA;            					rowHead =  sheet.createRow((short)k);&#xD;&#xA;                				rowHead.createCell(i).setCellValue(value1);&#xD;&#xA;                				owb.write(fileOut);   //[1]&#xD;&#xA;            				}&#xD;&#xA;            				else     //else condition [1]&#xD;&#xA;            				{&#xD;&#xA;            					int l = cFilledPositions.size()-1; &#xD;&#xA;            						k = cFilledPositions.get(l)+1;&#xD;&#xA;            						rowHead =  sheet.createRow((short)k);&#xD;&#xA;                    				rowHead.createCell(i).setCellValue(value1);&#xD;&#xA;                    				owb.write(fileOut);&#xD;&#xA;            				}&#xD;&#xA;            				cFilledPositions.add(k);	&#xD;&#xA;                 		}&#xD;&#xA;            			matched = false;&#xD;&#xA;            	}&#xD;&#xA;            	cFilledPositions.clear();&#xD;&#xA;            	positions.clear(); &#xD;&#xA;            }&#xD;&#xA;                   //write and close positioning&#xD;&#xA;            fileOut.close();