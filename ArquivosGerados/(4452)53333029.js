    $(document).ready(function(){           &#xD;&#xA;     	$('#coupon_btn').click(function(){&#xD;&#xA;                    var coupon_id = $('#coupon_id').val();&#xD;&#xA;                    $.ajax({&#xD;&#xA;                        url:'{{url('/checkCoupon')}}',&#xD;&#xA;                        data: 'code=' + coupon_id,&#xD;&#xA;                        success:function(res){&#xD;&#xA;                            $('#cartTotal').html(res);&#xD;&#xA;                        }&#xD;&#xA;                    })&#xD;&#xA;                });&#xD;&#xA;            });