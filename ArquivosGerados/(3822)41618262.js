    $ie = New-Object -com internetexplorer.application&#xD;&#xA;    $ie.visible= $false&#xD;&#xA;    $ie.silent= $true&#xD;&#xA;    $file= import-csv "C:\**FILEPATH**.csv"&#xD;&#xA;    $newfile= New-Item "C:\**FILEPATH**$(get-date -format dd-MM-yyyy)_delivered.csv" -type file -force&#xD;&#xA;    foreach ($i in $file) &#xD;&#xA;        {$tagnum= $i | select-object -expandproperty "Tag Number"&#xD;&#xA;        $trackingid = $i | select-object -expandproperty "Tracking ID"&#xD;&#xA;        $refnum= $i | select-object -expandproperty "Attribute Ref #"&#xD;&#xA;        $findest= $i | select-object -expandproperty "Final Dest"&#xD;&#xA;        if ($trackingid.length -gt 1)&#xD;&#xA;            {$ie.navigate("**URL**=$trackingid")&#xD;&#xA;            while($ie.ReadyState -ne 4) {start-sleep -m 100}&#xD;&#xA;            $trackstate= $ie.getproperty("st_del_en_us")&#xD;&#xA;            if($trackstate -ne "Delivered"){&#xD;&#xA;            break}&#xD;&#xA;            elseif($trackstate="Delivered"){&#xD;&#xA;                "$tagnum, $findest, $trackingid, $refnum" | Add-Content $newfile&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    $ie.close&#xD;&#xA;    [system.runtime.interopservices.marshal]::releasecomobject($ie)&#xD;&#xA;    remove-variable ie