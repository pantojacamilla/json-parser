    <script>&#xD;&#xA;        $(document).ready(function(){&#xD;&#xA;            load_data();&#xD;&#xA;            function load_data(query)&#xD;&#xA;            {&#xD;&#xA;                $.ajax({&#xD;&#xA;                    url:"search.php",&#xD;&#xA;                    method:"GET",&#xD;&#xA;                    data:{textbook:query},&#xD;&#xA;                    success:function(data)&#xD;&#xA;                    {&#xD;&#xA;                        $('#result').html(data);&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;            }&#xD;&#xA;            $('#search').keyup(function(){&#xD;&#xA;                var search = $(this).val();&#xD;&#xA;                if(search != '')&#xD;&#xA;                {&#xD;&#xA;                    load_data(search);&#xD;&#xA;                }&#xD;&#xA;                else&#xD;&#xA;                {&#xD;&#xA;                    load_data();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;        });&#xD;&#xA;    </script>&#xD;&#xA;    <script>&#xD;&#xA;        selectxt(id, textbood_adress){&#xD;&#xA;            $('#search').val(textbood_adress);&#xD;&#xA;        }&#xD;&#xA;    </script>