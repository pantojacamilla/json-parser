    <?php  $count = 1; &#xD;&#xA;    $settings  = _WSH()->option();&#xD;&#xA;    $query_args = array('post_type' => 'sh_services' , 'showposts' => $num , 'order_by' => $sort , 'order' => $order);&#xD;&#xA;    if( $cat ) $query_args['services_category'] = $cat;&#xD;&#xA;    $query = new WP_Query($query_args) ; &#xD;&#xA;    $top_heading_img= get_template_directory_uri()."/images/head-top.png";&#xD;&#xA;    $top_heading_img = sh_set( $settings, 'top_heading_img' ) ? sh_set( $settings, 'top_heading_img' ) : $top_heading_img;&#xD;&#xA;    //printr($top_heading_img);&#xD;&#xA;    ob_start() ;?>&#xD;&#xA;    <?php if( $query->have_posts() ):?>&#xD;&#xA;    	<!--======= SERVICES =========-->&#xD;&#xA;    	<section class="services">&#xD;&#xA;    		<div class="container"> &#xD;&#xA;    			<!--======= TITTLE =========-->&#xD;&#xA;    			<div class="tittle"> <img src="<?php  echo $top_heading_img;  ?>" alt="">&#xD;&#xA;    				<h3><?php echo balanceTags($title);?></h3>&#xD;&#xA;    				<p><?php echo balanceTags($text);?></p>&#xD;&#xA;    			</div>&#xD;&#xA;    			<ul class="row">&#xD;&#xA;    				<?php while($query->have_posts()): $query->the_post();&#xD;&#xA;    				global $post ;&#xD;&#xA;    				$services_meta = _WSH()->get_meta(); &#xD;&#xA;    				?>&#xD;&#xA;    				<!--======= SERVICE SECTION =========-->&#xD;&#xA;    				<li class="col-md-3 col-sm-4 col-xs-6">&#xD;&#xA;    					<section> &#xD;&#xA;    						<!--======= SERVICE IMG =========--> &#xD;&#xA;    						<?php the_post_thumbnail('271x337', array('class' => 'img-responsive'));?>&#xD;&#xA;    						<div class="icon"> <img src="<?php echo sh_set($services_meta, 'small_image');?>" alt="image"> </div>&#xD;&#xA;    						<!--======= SERVICE HOVER =========-->&#xD;&#xA;    						<div class="ser-hover">&#xD;&#xA;    							<p><?php echo _sh_trim(get_the_content(), $text_limit);?> <a href="<?php echo sh_set($services_meta, 'readmore_link');?>" class="read-more"><?php esc_html_e('Read more ', 'realtor');?><i class="fa fa-angle-double-right"></i></a> </p>&#xD;&#xA;    						</div>&#xD;&#xA;    						<a href="<?php echo sh_set($services_meta, 'readmore_link');?>" class="heading"><?php the_title();?></a> </section>&#xD;&#xA;    					</li>&#xD;&#xA;    				<?php endwhile;?>&#xD;&#xA;    			</ul>&#xD;&#xA;    		</div>&#xD;&#xA;    	</section>&#xD;&#xA;    <?php endif;?>		&#xD;&#xA;    <?php wp_reset_postdata();&#xD;&#xA;    return ob_get_clean();