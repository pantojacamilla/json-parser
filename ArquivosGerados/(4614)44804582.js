<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">&#xD;&#xA;  <s:Header>&#xD;&#xA;    <Action s:mustUnderstand="1" xmlns="http://schemas.microsoft.com/ws/2005/05/addressing/none">http://postnl.nl/cif/services/BarcodeWebService/IBarcodeWebService/GenerateBarcode</Action>&#xD;&#xA;    <Security xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">&#xD;&#xA;      <wsse:UsernameToken xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">&#xD;&#xA;        <wsse:Username>devc_!R4xc8p9</wsse:Username>&#xD;&#xA;        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">098fd559930983af31ef6630a0bb0c1974156561</wsse:Password>&#xD;&#xA;      </wsse:UsernameToken>&#xD;&#xA;    </Security>&#xD;&#xA;  </s:Header>&#xD;&#xA;  <s:Body>&#xD;&#xA;    <GenerateBarcode xmlns:d6p1="http://postnl.nl/cif/domain/BarcodeWebService/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://postnl.nl/cif/services/BarcodeWebService/">&#xD;&#xA;      <d6p1:Message>&#xD;&#xA;        <d6p1:MessageID>5</d6p1:MessageID>&#xD;&#xA;        <d6p1:MessageTimeStamp>28-06-2017 14:15:41</d6p1:MessageTimeStamp>&#xD;&#xA;      </d6p1:Message>&#xD;&#xA;      <d6p1:Customer>&#xD;&#xA;        <d6p1:CustomerCode>DEVC</d6p1:CustomerCode>&#xD;&#xA;        <d6p1:CustomerNumber>11223344</d6p1:CustomerNumber>&#xD;&#xA;      </d6p1:Customer>&#xD;&#xA;      <d6p1:Barcode>&#xD;&#xA;        <d6p1:Type>3S</d6p1:Type>&#xD;&#xA;        <d6p1:Range>DEVC</d6p1:Range>&#xD;&#xA;        <d6p1:Serie>1000000-2000000</d6p1:Serie>&#xD;&#xA;      </d6p1:Barcode>&#xD;&#xA;    </GenerateBarcode>&#xD;&#xA;  </s:Body>&#xD;&#xA;</s:Envelope>&#xD;&#xA;When I build it myself like: