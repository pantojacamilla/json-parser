    CapsuleCollider foot;  &#xD;&#xA;    void Update()&#xD;&#xA;        {&#xD;&#xA;            foot = GetComponentInChildren<CapsuleCollider>();&#xD;&#xA;            &#xD;&#xA;            if(foot.contact...){&#xD;&#xA;              Debug.Log("This is : ");&#xD;&#xA;              Debug.Log(foot.gameObject.tag);&#xD;&#xA;            }&#xD;&#xA;         &#xD;&#xA;        }