    TypeError                                 Traceback (most recent call last)&#xD;&#xA;    <ipython-input-30-bfd4a9d231f1> in <module>()&#xD;&#xA;         20                 dict_service = {}&#xD;&#xA;         21                 name = get_name(service_html)&#xD;&#xA;    ---> 22                 phone = get_phone_number(service_html)&#xD;&#xA;         23                 rating = get_rating(service_html)&#xD;&#xA;         24                 count = get_rating_count(service_html)&#xD;&#xA;    <ipython-input-25-7168fec7d0c7> in get_phone_number(body)&#xD;&#xA;         21 def get_phone_number(body):&#xD;&#xA;         22     i=0&#xD;&#xA;    ---> 23     for item in body.find('p',{'class':'contact-info'}):&#xD;&#xA;         24         i+=1&#xD;&#xA;         25         if(i==2):&#xD;&#xA;    TypeError: 'NoneType' object is not iterable