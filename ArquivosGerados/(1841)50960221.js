    Select Distinct&#xD;&#xA;    	vrs.AD_Site_Name0 [AD Site],  &#xD;&#xA;    	vrs.name0 [Computer], &#xD;&#xA;    	vrs.User_Name0 [Current User], &#xD;&#xA;    	vru.Unique_User_Name0 [Account Name], &#xD;&#xA;    	vru.Full_User_Name0 [Display Name], &#xD;&#xA;    	opsys.caption0 [OS], &#xD;&#xA;    	vrs.Client0 [Client],&#xD;&#xA;    	&#xD;&#xA;    	CASE&#xD;&#xA;    	When compsys.SystemType0 like '%x86%' Then 'x86'&#xD;&#xA;    	When compsys.SystemType0 like '%x64%' Then 'x64'&#xD;&#xA;    	Else 'unknown'&#xD;&#xA;    END as [System Type],&#xD;&#xA;    CASE 	&#xD;&#xA;    	WHEN vrs.Name0 like 'BN%' THEN	'BN' &#xD;&#xA;    	WHEN vrs.Name0 like 'GU%' THEN	'GU'&#xD;&#xA;    	WHEN vrs.Name0 like 'MP%' THEN	'GU'&#xD;&#xA;    	WHEN vrs.Name0 like 'KH%' THEN	'KH'&#xD;&#xA;    	WHEN vrs.Name0 like 'LA%' THEN	'LA'&#xD;&#xA;    	WHEN vrs.Name0 like 'MM%' THEN	'MM'&#xD;&#xA;    	WHEN vrs.Name0 like 'PH%' THEN	'PH' &#xD;&#xA;    	WHEN vrs.Name0 like 'RDC%' THEN	'RDC'&#xD;&#xA;    	WHEN vrs.Name0 like 'ID%' AND vrs.Name0 NOT LIKE 'IDDC%' AND vrs.Name0 NOT like 'IDCC%' THEN 'ID'&#xD;&#xA;    	WHEN vrs.Name0 like 'MY%' AND vrs.Name0 NOT LIKE 'MYDC%' AND vrs.Name0 NOT like 'MYCC%' THEN 'MY'&#xD;&#xA;    	WHEN vrs.Name0 like 'SG%' AND vrs.Name0 NOT LIKE 'SGDC%' AND vrs.Name0 NOT like 'SGCC%' AND vrs.Name0 NOT like 'SGMD%'THEN 'SG' &#xD;&#xA;    	WHEN vrs.Name0 like 'TH%' AND vrs.Name0 NOT LIKE 'THDC%' AND vrs.Name0 NOT like 'THCC%' THEN 'TH'&#xD;&#xA;    	WHEN vrs.Name0 like 'VN%' AND vrs.Name0 NOT LIKE 'VNDC%' AND vrs.Name0 NOT like 'VNCC%' THEN 'VN'&#xD;&#xA;    	WHEN vrs.Name0 like 'IDDC%' OR vrs.Name0 like 'IDCC%' THEN 'ID Consulting'&#xD;&#xA;    	WHEN vrs.Name0 like 'MYDC%' OR vrs.Name0 like 'MYCC%' THEN 'MY Consulting'&#xD;&#xA;    	WHEN vrs.Name0 like 'SGDC%' OR vrs.Name0 like 'SGCC%' OR vrs.Name0 like 'SGMD%' THEN 'SG Consulting'&#xD;&#xA;    	WHEN vrs.Name0 like 'THDC%' OR vrs.Name0 like 'THCC%' THEN 'TH Consulting'&#xD;&#xA;    	WHEN vrs.Name0 like 'VNDC%' OR vrs.Name0 like 'VNCC%' THEN 'VN Consulting'&#xD;&#xA;    	ELSE 'Others'&#xD;&#xA;    END as [AD Site Name],&#xD;&#xA;    CASE &#xD;&#xA;    		WHEN opsys.Caption0 like '%Windows 7%' THEN 'Windows 7'&#xD;&#xA;    		WHEN opsys.Caption0 like '%Windows 8%' Then 'Windows 8'&#xD;&#xA;    		WHEN opsys.Caption0 like '%Windows 10%' THEN 'Windows 10'&#xD;&#xA;    		When opsys.Caption0 like '%Windows Server 2008%' Then 'Windows Server 2008'&#xD;&#xA;    		When opsys.Caption0 like '%Windows Server 2012%' Then 'Windows Server 2012'&#xD;&#xA;    		Else opsys.Caption0 &#xD;&#xA;    	END as [OS],&#xD;&#xA;    	CASE &#xD;&#xA;    	WHEN opsys.CSDVersion0 is null THEN 'No SP'&#xD;&#xA;    	Else opsys.CSDVersion0&#xD;&#xA;    END as [Service Pack],&#xD;&#xA;    	vrs.Client_Version0 AS "Agent Version"	&#xD;&#xA;    	FROM&#xD;&#xA;    	v_R_System vrs&#xD;&#xA;    	LEFT Join v_R_User vru ON vrs.User_Name0 = vru.User_Name0&#xD;&#xA;    	Left Join v_GS_OPERATING_SYSTEM OPSYS on vrs.ResourceID = opsys.ResourceID&#xD;&#xA;    	Left Join v_GS_Computer_System compsys on vrs.ResourceID = compsys.ResourceID&#xD;&#xA;    	&#xD;&#xA;    	 &#xD;&#xA;    	Inner Join v_FullCollectionMembership FCM ON vrs.ResourceID = FCM.ResourceID AND FCM.CollectionID = 'xxxx'&#xD;&#xA;    WHERE &#xD;&#xA;    	&#xD;&#xA;    	vrs.Name0 not like 'unknown' &#xD;&#xA;    ORDER BY&#xD;&#xA;    	vrs.name0