    <div class="w3-top" style="z-index: 999;">&#xD;&#xA;    	<div class="navcontainer">&#xD;&#xA;    		<div class="w3-hide-small">&#xD;&#xA;    			<a href="" title="Home" class="w3-left w3-wide w3-hide-small"><img src="/images/-logo.png" alt="U.S. Transportation" title="" style=""></a>&#xD;&#xA;    			<div class="abovenav w3-right">&#xD;&#xA;    				<button class="w3-button w3-round-large" onclick="">Customer Login</button>&nbsp;&#xD;&#xA;    				<button class="w3-button w3-round-large" onclick="">Carrier Login</button>&#xD;&#xA;    			</div>&#xD;&#xA;    		</div>&#xD;&#xA;    		<div class="w3-bar nav w3-card-2 w3-left-align w3-large" style="text-overflow: auto;" id="nav">&#xD;&#xA;    			<div class="w3-hide-large w3-hide-medium">&#xD;&#xA;    				<a class="w3-hide-medium w3-hide-large w3-right w3-margin-right w3-text-white buttons" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><span class="fa fa-bars"></span></a>&#xD;&#xA;    				<a href="<?php if ($server_name <> "") { echo "http://".$server_name."/";}?>/index.php" title="Home" class="w3-left w3-margin-left w3-text-white buttons"><span class="fa fa-home w3-xlarge"></span></a>&#xD;&#xA;    			</div>&#xD;&#xA;    			<div style="margin-right: 10%;">&#xD;&#xA;    			<nav>&#xD;&#xA;    				<?php&#xD;&#xA;    				include 'yortal\db.php';&#xD;&#xA;    				$sql = "SELECT *,(select count(*) from pages where parent = p.id) as num from pages p where parent = 0 and status = 'ON' order by sort DESC";&#xD;&#xA;    				$result = $mysqli->query($sql);&#xD;&#xA;    				while ($row = $result->fetch_assoc()) &#xD;&#xA;    				{&#xD;&#xA;    					$navid = $row['id'];&#xD;&#xA;    					$navname = $row['nav'];&#xD;&#xA;    					$navslug = $row['slug'];&#xD;&#xA;    					$navurl = $row['url'];&#xD;&#xA;    					$navnum = $row['num'];&#xD;&#xA;    					&#xD;&#xA;    					if ($navurl != ''){&#xD;&#xA;    						$navlink = $navurl;&#xD;&#xA;    					} &#xD;&#xA;    					else{&#xD;&#xA;    						$navlink = "page.php?id=".$navid."&title=".$navslug;&#xD;&#xA;    					}&#xD;&#xA;    					if (substr($navlink,0,4) != "http"){&#xD;&#xA;    						if ($server_name <> "") { &#xD;&#xA;    							$navlink = "http://".$server_name."/".$navlink;&#xD;&#xA;    						}&#xD;&#xA;    					}&#xD;&#xA;    					if ($navurl == '#'){&#xD;&#xA;    						$navlink = $navurl;&#xD;&#xA;    					}&#xD;&#xA;    					if ($navnum ==0){&#xD;&#xA;    					?>&#xD;&#xA;    						<a href="<?php echo $navlink; ?>" class="w3-hide-small w3-right w3-text-white w3-padding-large buttons w3-margin-right" style="text-decoration: none; font-weight: bold;"><?php echo $navname; ?></a>&#xD;&#xA;    					<?php&#xD;&#xA;    					}else{&#xD;&#xA;    					?>&#xD;&#xA;    						<div class="w3-dropdown-hover w3-hide-small w3-right" onclick="javascript:window.location.href='<?php echo $navlink;?>'">&#xD;&#xA;    						<button class="w3-button"><?php echo $navname;?></button>&#xD;&#xA;    						<div class="w3-dropdown-content w3-white w3-card-4">&#xD;&#xA;    						<?php&#xD;&#xA;    						//Subpages&#xD;&#xA;    						$sql2 = "SELECT *,(select count(*) from pages where parent = p.id) as num from pages p where parent = ".$navid." and status = 'ON' order by sort";&#xD;&#xA;    						$result2 = $mysqli->query($sql2);&#xD;&#xA;    						while ($row2 = $result2->fetch_assoc()) &#xD;&#xA;    						{&#xD;&#xA;    							$dropid = $row2['id'];&#xD;&#xA;    							$dropname = $row2['nav'];&#xD;&#xA;    							$dropurl = $row2['url'];&#xD;&#xA;    							$dropslug = $row2['slug'];&#xD;&#xA;    							$dropnum = $row2['num'];&#xD;&#xA;    							if ($dropurl != ''){&#xD;&#xA;    								$droplink = $dropurl;&#xD;&#xA;    							} else{&#xD;&#xA;    								$droplink = "page.php?id=".$dropid."&title=".$dropslug;&#xD;&#xA;    							}&#xD;&#xA;    							if (substr($droplink,0,4) != "http"){&#xD;&#xA;    								if ($server_name <> "") { &#xD;&#xA;    									$droplink = "http://".$server_name."/".$droplink;&#xD;&#xA;    								}&#xD;&#xA;    							}&#xD;&#xA;    							if ($dropurl == '#'){&#xD;&#xA;    								$droplink = $dropurl;&#xD;&#xA;    							}				&#xD;&#xA;    						?>&#xD;&#xA;    						<a href="<?php echo $droplink;?>"><?php echo $dropname; ?></a>&#xD;&#xA;    						<?php &#xD;&#xA;    						}&#xD;&#xA;    						echo "</div></div>";&#xD;&#xA;    					} &#xD;&#xA;    				}&#xD;&#xA;    				?>&#xD;&#xA;    				</nav>&#xD;&#xA;    			</div>&#xD;&#xA;    		</div>&#xD;&#xA;    	</div>&#xD;&#xA;     </div>